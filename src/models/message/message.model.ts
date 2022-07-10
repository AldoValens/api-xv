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
    messageIvonne: {
        type: DataTypes.TEXT,
    },
    messageViviana: {
        type: DataTypes.TEXT,
    },
    count: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.TEXT,
    },
    confirmation: {
        type: DataTypes.BOOLEAN
    }
}, {timestamps: false ,tableName: 'message'})