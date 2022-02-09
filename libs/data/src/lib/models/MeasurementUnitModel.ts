
import { MeasurementUnitAttributes, MeasurementUnitCreationAttributes } from "@gym-helper-app/shared-types";
import { DataTypes, Model, ModelAttributes } from "sequelize/dist";

export class MeasurementUnitModel extends Model<MeasurementUnitAttributes, MeasurementUnitCreationAttributes> implements MeasurementUnitAttributes {
    id: string
    name: string
    acro: string
}

/**
 * User table definition.
 */
export const measurementUnitTableDefinition: ModelAttributes<MeasurementUnitModel, MeasurementUnitAttributes> = {
    id: {
        type: DataTypes.STRING(4),
        primaryKey: true,
        comment: "acronym",
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Full name"
    }
}