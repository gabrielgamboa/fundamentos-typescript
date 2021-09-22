import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";

const importCategoryService = new ImportCategoryService();
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController }