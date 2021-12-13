import { Options } from 'sequelize'

export const environment: {
  production: boolean,
  database: Options
} = {
  production: true,
  database: {
    host: "localhost",
    database: "app_gym_helper",
    username: "root",
    password: "root",
    dialect: "postgres"
  }
};
