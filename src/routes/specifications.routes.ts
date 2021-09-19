import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    // const { name, description } = request.body;
    // const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    // createSpecificationService.execute({ name, description });

    // return response.status(201).send();
});

export { specificationRoutes }