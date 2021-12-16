import { Options } from "sequelize/dist";

export const environment: {
  production: boolean,
  database: Options
} = {
  production: false,
  database: {
    host: "localhost",
    database: "app_gym_helper",
    username: "root",
    password: "root",
    dialect: "postgres"
  }
};
