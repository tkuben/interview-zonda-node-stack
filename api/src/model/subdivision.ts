import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface Subdivision {
    id: string;
    code: string;
    name: string;
    longitude: number,
    latitude: number
}

export class SubdivisionInstance extends Model<Subdivision> {}

SubdivisionInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        longitude: {
            type: DataTypes.DOUBLE(9,6),
            allowNull: false,
        },
        latitude: {
            type: DataTypes.DOUBLE(9,6),
            allowNull: false,
        }
    },
    {
        sequelize: db,
        tableName: 'subdivision',
    }
);
