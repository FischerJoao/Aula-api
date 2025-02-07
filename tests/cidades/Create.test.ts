/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"

describe('Cidades - Create', () => {

    it('Cria registro', async () => {

        const res1 = await testServer.post('/cidades').send({
            nome: 'São Paulo'
        });
        //oq recebo        //oq espero
        //expect('a').toEqual('b');
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

    })

    it('Cria registro com nome vazio', async () => {

        const res1 = await testServer.post('/cidades').send({
            nome: ''
        });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome')
    }
    )

})