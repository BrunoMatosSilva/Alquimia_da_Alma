import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
    }>;
}
