
import { MeasurementUnitAttributes, MeasurementUnitCreationAttributes } from "@gym-helper-app/shared-types";
import { DataTypes, Model, ModelAttributes } from "sequelize/dist";
import { UserModel } from "./UserModel";


export class MeasurementUnitModel extends Model<MeasurementUnitAttributes, MeasurementUnitCreationAttributes> implements MeasurementUnitAttributes {
    id: string
    name: string
}

/**
 * User table definition.
 */
export const measurementUnitTableDefinition: ModelAttributes<MeasurementUnitModel, MeasurementUnitAttributes> = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}