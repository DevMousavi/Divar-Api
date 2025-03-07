import dotenv from 'dotenv';
import { Options, Sequelize } from '@sequelize/core';

dotenv.config();
const sequelizeOptions: Options<any> = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
};

export const sequelize: Sequelize<any> = new Sequelize(sequelizeOptions);

sequelize
    .authenticate()
    .then(async () => {
        await sequelize.sync({ alter: true });
        console.log('✅ Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('❌ Unable to connect to the database:', error?.message);
    });
