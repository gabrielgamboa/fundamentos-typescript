import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
});

usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), (request, response) => {
    return updateUserAvatarController.handle(request, response);
})

export { usersRoutes }