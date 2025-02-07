//listar todas as cidades do banco

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../server/shared/middlewares";

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

//middle de validação
export const getAllValidation = validation((getSchema) => ({

    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0), // pedir pagina maior que zero 
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    })),

}))

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    //recebendo parametros no query
    console.log(req.query);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
};

