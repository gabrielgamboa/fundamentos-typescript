import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        //pego por desestruturação o sub, porém nomeando-o de "user_id".
        const { sub: user_id } = verify(token, "d5c6d7e0392032715f66cbd14e085594") as IPayload;

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists", 401);
        }

        request.user = { id: user_id };

        return next();

    } catch (error) {
        throw new AppError("Invalid token", 401);
    }

}