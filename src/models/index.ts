import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [User],
    synchronize: true,
    logging: false,
})


AppDataSource.initialize()
    .then(() => {
        console.log("Database connecton initialized..!")
    })
    .catch((error) => console.log(error))