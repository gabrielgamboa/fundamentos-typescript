import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index"
import { listCategoryController } from "../modules/cars/useCases/listCategories/index"; 

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

//create a new category
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

//list all categories
categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);
    return response.send();
});

export { categoriesRoutes };
