import { Router } from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from "../../controllers";

const router = Router();

router.get("/", (_, res) => {
    res.send("Hello, world!");
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);
//validacao e depois criacao de dados
router.post('/cidades', CidadesController.createValidation, CidadesController.create); //cria

export { router };

