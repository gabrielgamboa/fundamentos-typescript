import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import "./database/index";
import "@shared/container";

import { router } from "./routes/index"
import swaggerFile from "./swagger.json";

import { error } from "@middlewares/error";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//rotas da api
app.use(router);
//middleware para tratativa de erros
app.use(error);

app.listen(3333, () => console.log("Server is running on port 3333"));