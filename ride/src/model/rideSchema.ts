import { Sequelize, DataTypes, Model, UUID } from "sequelize";
import sequelize from "../config/database";
import { Ride } from "../utils/interfaces/rideInterface";
import { v4 as uuidv4 } from 'uuid'
import { error } from 'winston'
import { Status } from "../utils/enums/rideEnum";

class ride extends Model<Ride> implements Ride {
    public id?: string | undefined;
    public from: string;
    public to: string;
    public time: Date;
    public driverId: string;
    public price: number;
    public date: Date
    public status: Status;
    public createdAt?: Date
    public updatedAt?: Date
    public deletedAt?: Date
    public deletedBy?: string
    public isDeleted?: boolean
}

ride.init({

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE

    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type:DataTypes.ENUM,
        values: Object.values(Status),
        defaultValue:Status.isAvailable
    },
    date: {
        type:DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    deletedBy: {
        type: DataTypes.STRING,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'ride',
})

sequelize
    .sync()
    .then(() => {
        console.log('ride table linked successfully')
    })
    .catch((error) => {
        console.error('unable to create table', error)
    })

export default { ride }
    












