import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationService } from "./CreateCarSpecificationService";

let createCarSpecificationService: CreateCarSpecificationService;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
        createCarSpecificationService = new CreateCarSpecificationService(carsRepositoryInMemory, specificationsRepositoryInMemory);
    });

    it("should not be able to add a new specification to a non-existent car", async () => {
       expect(async () => {
        const car_id = "1234";
        const specifications_id = ["1", "1234"];
        await createCarSpecificationService.execute({ car_id, specifications_id });
       }).rejects.toBeInstanceOf(AppError);
    });
    
    it("should be able to add a new specification to the car", async () => {
        

        const car = await carsRepositoryInMemory.create({
            name: "Name car1",
            description: "Description Car",
            brand: "Brand",
            daily_rate: 100,
            license_plate: "BSC-1002",
            category_id: "category",
            fine_amount: 60
        });

        const specification = await specificationsRepositoryInMemory.create({
            name: "teste",
            description: "teste1234",
        })

        const specifications_id = [specification.id];

        const specificationsCars = await createCarSpecificationService.execute({ car_id: car.id, specifications_id });

        console.log(specificationsCars)

        expect(specificationsCars).toHaveProperty("specifications");
        expect(specificationsCars.specifications.length).toBe(1);
    });
});