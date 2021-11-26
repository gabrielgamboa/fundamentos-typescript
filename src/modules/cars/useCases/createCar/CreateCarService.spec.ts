import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarService } from "./CreateCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        await createCarService.execute({
            name: "Name car",
            description: "Description Car",
            brand: "Brand",
            daily_rate: 100,
            license_plate: "BSC-1002",
            category_id: "category",
            fine_amount: 60
        });
    });
});