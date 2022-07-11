"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('xv', 'admin', 'blackbear21$', {
    host: 'xv.ciyqz5vhnbwq.us-west-1.rds.amazonaws.com',
    dialect: 'mysql'
});
//# sourceMappingURL=connection.js.map