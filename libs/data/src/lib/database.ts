
import { Sequelize, Options } from 'sequelize'

export const connect = async (options: Options) => {
    const sequelize = new Sequelize(options);
    await sequelize.authenticate();

    return sequelize;
}