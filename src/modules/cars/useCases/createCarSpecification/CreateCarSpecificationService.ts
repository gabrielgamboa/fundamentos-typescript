import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

class CreateCarSpecificationService {
    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository,

        private specificationsRepository: ISpecificationsRepository
    ) {}
    
    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carsExists = await this.carsRepository.findById(car_id);

        if (!carsExists) 
            throw new AppError("Car doest not exists!");

        const specifications = await this.specificationsRepository.findByIds(specifications_id);
        carsExists.specifications = specifications;

        //método create do repositório permite receber um id.
        //Caso houver id, significa que irá atualizar o registro, e não criar outro
        await this.carsRepository.create(carsExists);

        return carsExists;
    }
}

export { CreateCarSpecificationService }