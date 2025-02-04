/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";


interface ICidade {
    nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {


    console.log(req.body.nome);



    res.send(`Create`);
}

