import { Sequelize } from 'sequelize';

export const db = new Sequelize('xv', 'aldovalens', 'blackbear21$', {
    host: 'localhost',
    dialect: 'mysql'
});