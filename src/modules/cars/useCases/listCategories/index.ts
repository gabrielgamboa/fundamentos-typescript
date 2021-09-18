import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoryController = new ListCategoriesController(listCategoriesService); 

export { listCategoryController }