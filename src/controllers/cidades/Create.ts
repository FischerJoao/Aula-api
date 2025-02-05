/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    const validateData: ICidade | undefined = undefined;

    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const erros: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            erros[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: erros,
        });
    }

    console.log(req.body.nome);

    res.send(`Create`);
};