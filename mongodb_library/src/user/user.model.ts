import { Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
class Group {
    @Prop()
    groupId: Types.ObjectId;

    @Prop()
    manager: boolean;
}

@Schema()
export class User {
    @Prop()
    passportId: string;

    @Prop()
    email: string;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    activeDirectory: boolean;

    @Prop({ type: Group })
    groups: Group[];

    @Prop()
    authorizedInvestigator: boolean;

    @Prop()
    lastLogin: Date;

    @Prop()
    imagePath: string;

    @Prop()
    deleted: boolean;

    @Prop()
    classification: string;

    @Prop({ type: Types.ObjectId })
    companiesIds: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);