import { Options } from "sequelize/dist";

export const environment: {
  port: number,
  production: boolean,
  test: boolean,
  database: Options
} = {
  test: false,
  production: false,
  port: 3333,
  database: {
    host: "localhost",
    database: "app_gym_helper",
    username: "dev",
    password: "Password",
    dialect: "postgres"
  }
};
