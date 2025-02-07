//listar todas as cidades do banco

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../server/shared/middlewares";

interface IParamProps {
    id?: number;
}

//middle de validação
export const deleteByIdValidation = validation((getSchema) => ({

    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0), // pedir id maior que zero 
    })),

}))

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    //recebendo parametros no query
    console.log(req.params);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
};

