import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index"
import { listCategoryController } from "../modules/cars/useCases/listCategories/index"; 

const categoriesRoutes = Router();

//create a new category
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

//list all categories
categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
