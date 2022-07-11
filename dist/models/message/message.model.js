"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../../database/connection");
exports.Message = connection_1.db.define('message', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    messageIvonne: {
        type: sequelize_1.DataTypes.TEXT,
    },
    messageViviana: {
        type: sequelize_1.DataTypes.TEXT,
    },
    count: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
    },
    confirmation: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, { timestamps: false, tableName: 'message' });
//# sourceMappingURL=message.model.js.map