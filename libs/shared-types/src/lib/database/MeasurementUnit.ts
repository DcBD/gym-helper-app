/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional } from "sequelize/dist";

export interface MeasurementUnitAttributes {
    id: string
    name: string
}

export interface MeasurementUnitCreationAttributes extends Optional<MeasurementUnitAttributes, "id"> { }

export interface MeasurementUnitInstance extends Model<MeasurementUnitAttributes, MeasurementUnitCreationAttributes>, MeasurementUnitAttributes { }