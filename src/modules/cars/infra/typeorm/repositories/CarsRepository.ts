import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async findById(id: string): Promise<Car> {
        return await this.repository.findOne(id);
    }

    async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name, specifications, id }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name,
            specifications,
            id
        });

        await this.repository.save(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({ license_plate });
        return car;
    }

    async findAvailable(name?: string, brand?: string, category_id?: string): Promise<Car[]> {
        const cars = await this.repository.createQueryBuilder("car")
            .where("car.available = :available", { available: true });

        if (brand) cars.andWhere("car.brand = :brand", { brand });
        if (name) cars.andWhere("car.name = :name", { name });
        if (category_id) cars.andWhere("car.category_id = :category_id", { category_id });

        return await cars.getMany();
    }
    

}

export { CarsRepository }