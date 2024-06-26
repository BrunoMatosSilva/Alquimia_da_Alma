import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository){}

  async getUserbyId(userId: string){
    const user = await this.usersRepo.findUnique({
       where: {id: userId}
     });
 
     return {
       name: user.name,
       email: user.email
     }
   }

}
