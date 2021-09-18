import { Request, Response } from "express";
import { ListCategoriesService } from "./ListCategoriesService";

class ListCategoriesController {
    private listCategoriesService: ListCategoriesService ;
    
    constructor(listCategoriesService: ListCategoriesService) {
        this.listCategoriesService = listCategoriesService;
    }

    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategoriesService.execute();
        return response.json(allCategories);
    }
}

export { ListCategoriesController }