import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    getUserbyId(userId: string): Promise<{
        name: string;
        email: string;
    }>;
}
