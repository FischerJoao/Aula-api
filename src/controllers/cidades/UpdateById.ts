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
interface IBodyProps {
    nome: string;
}

//middle de validação
export const updateByIdValidation = validation((getSchema) => ({

    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3), // pedir id maior que zero 
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0), // pedir id maior que zero 
    })),

}))

export const updateById = async (req: Request<IParamProps>, res: Response) => {
    //recebendo parametros no query
    console.log(req.params);
    console.log(req.body);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
};

