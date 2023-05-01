import { User } from '../models/user';
import { v4 } from 'uuid';
import { validate } from 'class-validator'
import { AppDataSource } from '../models'
import { hashSync } from 'bcrypt'
import { QueryFailedError } from 'typeorm'


const userModel = new User();


export class UserService {

    static async saveUser(user: User ){

        try {
            userModel.id = v4();
            userModel.email = user.email;
            userModel.name = user.name;
            userModel.password =  user.password
    
            const errors = await validate(userModel);
    
            // TODO: improve error handling
            if (errors.length) throw('Errror validating request')
    
            userModel.password =  await hashSync(user.password, 10)
    
            return await AppDataSource.manager.save(userModel)
        } catch (error) {
            // TODO: Improve error messages
            if(error instanceof QueryFailedError) return error.message
            return error
        }

    }
}