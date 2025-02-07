import supertest from "supertest";
import { server } from "../src/server/Server";

//export const testServer = supertest(`http://localhost:${process.env.PORT}`);
export const testServer = supertest(server);