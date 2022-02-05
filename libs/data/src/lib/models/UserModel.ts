import { UserAttributes, UserCreationAttributes } from "@gym-helper-app/shared-types";
import { DataTypes, Model, ModelAttributes } from "sequelize/dist";


export class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    email: string;
    password: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}


/**
 * User table definition.
 */
export const userTableDefinition: ModelAttributes<UserModel, UserAttributes> = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}