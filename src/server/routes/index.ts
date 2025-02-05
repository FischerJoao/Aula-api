import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from "../../controllers";

const router = Router();

router.get("/", (_, res) => {
    res.send("Hello, world!");
});
//validacao e depois criacao de dados
router.post('/cidades', CidadesController.createBodyValidator, CidadesController.createQueryValidator, CidadesController.create);
export { router };

