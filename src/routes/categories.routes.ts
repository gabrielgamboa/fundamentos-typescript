import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory/index"

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

//create a new category
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

//list all categories
categoriesRoutes.get("/", (request, response) => {
    const categories = categoriesRepository.list();
    return response.json(categories);
});

export { categoriesRoutes };
