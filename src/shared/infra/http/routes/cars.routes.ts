import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListCarController } from "@modules/cars/useCases/listCars/ListCarsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarController();

carsRoutes.post("/", 
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/", listCarsController.handle);

export { carsRoutes }