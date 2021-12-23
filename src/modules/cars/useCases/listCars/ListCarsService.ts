import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

class ListCarsService {
    constructor(private carsRepository: ICarsRepository) {}

    async execute({category_id, brand, name}: IRequest): Promise<Car[]> {
        const cars = this.carsRepository.findAvailable(name,brand,category_id);
        return cars;
    }
}

export { ListCarsService }