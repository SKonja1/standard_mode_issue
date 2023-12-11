import { Injectable } from '@nestjs/common';
import { MUserService } from '@bis-tec/mongodb-library';


@Injectable()
export class TestService {
    constructor(
        // private mUserService: MUserService
    ) { 
        // this.getTests(); 
    }

    getTests(){
        // console.log(this.mUserService.getUsers({}));
    }

}