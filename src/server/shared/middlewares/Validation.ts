/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { query, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";
import { Schema, ValidationError } from "yup";


type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T>(schama: Schema<any>) => Schema<T>;

type TALLSchemas = Record<TProperty, Schema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TALLSchemas>

type TValidation = (GetAllschemas: TGetAllSchemas) => RequestHandler;


export const validation: TValidation = (GetAllschemas) => async (req, res, next) => {
    const schemas = GetAllschemas((schema) => schema)
    console.log(schemas)

    const errorsResult: Record<string, Record<string, string>> = {};


    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false });

        } catch (error) {
            const yupError = error as ValidationError;
            const erros: Record<string, string> = {};

            yupError.inner.forEach(error => {
                if (error.path === undefined) return;
                erros[error.path] = error.message;
            });

            errorsResult[key] = erros;


        }
        console.log("Validation middleware");
    });

    if (Object.entries(errorsResult).length === 0) {
        next();
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }



}


