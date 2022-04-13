import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarController } from "@modules/cars/useCases/listCars/ListAvailableCarsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";

import multer from "multer";
import uploadConfig from "../../../../config/upload";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImageController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post("/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post("/specifications/:id", 
    ensureAuthenticated,
    ensureAdmin, 
    createCarSpecificationController.handle
);

carsRoutes.post("/images/:id",
    ensureAuthenticated,
    ensureAdmin,
    upload.array("images"),
    uploadCarImageController.handle
);

export { carsRoutes }