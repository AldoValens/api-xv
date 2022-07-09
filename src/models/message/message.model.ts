import { DataTypes, Model } from "sequelize";
import { db } from '../../database/connection';


export interface  MessageI extends Model {
    id: number,
    name: string,
    email: string
    message: string,
}

export const Message = db.define<MessageI>('message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT,
    },
    name: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.TEXT,
    },
    confirmation: {
        type: DataTypes.BOOLEAN
    }
}, {timestamps: false ,tableName: 'message'})