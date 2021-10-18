import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { listCategoryController } from "../modules/cars/useCases/listCategories/index"; 
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

//create a new category
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

//list all categories
categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
