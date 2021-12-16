/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional } from "sequelize/dist";

export interface UserAttributes {
    id: number
    email: string
    password: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}