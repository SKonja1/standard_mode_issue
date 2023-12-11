import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';


@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name, "myConnection") private readonly userModel: Model<User>
    ){}

    async getUser(query: object, projection: object = {}): Promise<User> {
        try {
            return await this.userModel.findOne(query, projection).exec();
        } catch (err) {
            throw err;
        }
    }

    async getUsers(query: object, projection: object = {}): Promise<User[]> {
        try {
            return await this.userModel.find(query, projection).exec();
        } catch (err) {
            throw err;
        }
    }

}