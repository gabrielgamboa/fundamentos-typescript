import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];
    
    async create({ name, description, brand, daily_rate, fine_amount, license_plate, category_id }: ICreateCarDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car, { 
            name,
            description,
            brand,
            daily_rate,
            fine_amount,
            license_plate,
            category_id 
        });

        this.cars.push(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
       return await this.cars.find(car => car.license_plate === license_plate);
    }

    async findAvailable(name?: string, brand?: string, category_id?: string): Promise<Car[]> {
        //refatorar
        return await this.cars
            .filter(car => car.available)
            .filter(car => (brand && car.brand === brand) || (name && car.name === name) || (category_id && car.category_id === category_id));
    }
}

export { CarsRepositoryInMemory }