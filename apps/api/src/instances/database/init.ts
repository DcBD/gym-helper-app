import { MeasurementUnitModel, measurementUnitTableDefinition, UserModel, userTableDefinition } from "@gym-helper-app/data";
import { Model, ModelAttributes, Sequelize, } from "sequelize/dist";




const dbInit = (sequelize: Sequelize) => Promise.all([
    UserModel.init(userTableDefinition, { sequelize }).sync(),
    MeasurementUnitModel.init(measurementUnitTableDefinition, { sequelize }).sync()
])

export default dbInit;