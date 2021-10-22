import { getRepository, Repository } from "typeorm"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User"
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UsersRepository }