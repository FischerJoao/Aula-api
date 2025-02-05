/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../server/shared/middlewares";

interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
})

export const createBodyValidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const erros: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            erros[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: erros,
        });
    }
}


interface IFilter {
    filter: string;
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3),
})

export const createQueryValidator: RequestHandler = async (req, res, next) => {
    try {
        await queryValidation.validate(req.query, { abortEarly: false });
        next();
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const erros: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            erros[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: erros,
        });
    }
}






export const createValidation = validation()






export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    console.log(req.body);
    res.send(`Create`);


};

