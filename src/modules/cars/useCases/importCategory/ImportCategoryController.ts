import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryService } from "./ImportCategoryService";

class ImportCategoryController {

    handle(request: Request, response: Response): Response {
        const { file } = request;
        const importCategoryService = container.resolve(ImportCategoryService);
        importCategoryService.execute(file);
        return response.send();
    }
}

export { ImportCategoryController }