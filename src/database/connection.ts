import { Sequelize } from 'sequelize';

export const db = new Sequelize('xv', 'admin', 'blackbear21$', {
    host: 'xv.ciyqz5vhnbwq.us-west-1.rds.amazonaws.com',
    dialect: 'mysql'
});