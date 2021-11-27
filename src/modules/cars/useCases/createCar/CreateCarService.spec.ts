import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarService } from "./CreateCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarService.execute({
            name: "Name car1",
            description: "Description Car",
            brand: "Brand",
            daily_rate: 100,
            license_plate: "BSC-1002",
            category_id: "category",
            fine_amount: 60
        });

        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with same license plate", () => {
        expect(async () => {
            await createCarService.execute({
                name: "Name car1",
                description: "Description Car",
                brand: "Brand",
                daily_rate: 100,
                license_plate: "BSC-1002",
                category_id: "category",
                fine_amount: 60
            });

            await createCarService.execute({
                name: "Name car1",
                description: "Description Car",
                brand: "Brand",
                daily_rate: 100,
                license_plate: "BSC-1002",
                category_id: "category",
                fine_amount: 60
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to create a car with available true by default", async () => {
        const car = await createCarService.execute({
            name: "Name car1",
            description: "Description Car",
            brand: "Brand",
            daily_rate: 100,
            license_plate: "BSC-1002",
            category_id: "category",
            fine_amount: 60
        });

        expect(car.available).toBe(true);
    });
});