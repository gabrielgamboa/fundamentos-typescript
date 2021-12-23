import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsService } from "./ListCarsService";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsService: ListCarsService;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsService = new ListCarsService(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "Carro1",
            description: "Carro com espaço",
            daily_rate: 110.00,
            license_plate: "DEF-12345",
            fine_amount: 40.00,
            brand: "Audi",
            category_id: "category_id"
        });

        const availableCars = await listCarsService.execute({});

        expect(availableCars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Carro2",
            description: "Carro com espaço",
            daily_rate: 110.00,
            license_plate: "DEF-12345",
            fine_amount: 40.00,
            brand: "Audi",
            category_id: "category_id"
        });

        const availableCars = await listCarsService.execute({
            name: "Carro2"
        });

        expect(availableCars).toEqual([car]);
    });
});