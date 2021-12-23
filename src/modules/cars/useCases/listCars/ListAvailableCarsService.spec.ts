import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsService } from "./ListAvailableCarsService";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsService: ListAvailableCarsService;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsService = new ListAvailableCarsService(carsRepositoryInMemory);
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

        const availableCars = await listAvailableCarsService.execute({});

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

        const availableCars = await listAvailableCarsService.execute({
            name: "Carro2"
        });

        expect(availableCars).toEqual([car]);
    });


    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Carro3",
            description: "Carro com espaço",
            daily_rate: 110.00,
            license_plate: "DEF-55555",
            fine_amount: 40.00,
            brand: "Carro_brand_test",
            category_id: "category_id"
        });

        const availableCars = await listAvailableCarsService.execute({
            brand: "Carro_brand_tes"
        });

        expect(availableCars).toEqual([car]);
    });


    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Carro3",
            description: "Carro com espaço",
            daily_rate: 110.00,
            license_plate: "DEF-55555",
            fine_amount: 40.00,
            brand: "Carro_brand_test",
            category_id: "category_id_test"
        });

        const availableCars = await listAvailableCarsService.execute({
            category_id: "category_id_test"
        });

        expect(availableCars).toEqual([car]);
    });
});