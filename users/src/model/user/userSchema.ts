import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../../config/dataBase";
import { User } from "../../utils/interfaces/userInterface";
import { v4 as uuidv4 } from 'uuid';
import { error } from "winston";

class user extends Model<User> implements User {
    public id?: string
    public firstName!: string;
    public lastName!: string;
    public age!: number;
    public email!: string;
    public password!: string;
    public phoneNo!: number;
}

user.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    age: {
        type:DataTypes.INTEGER,
    },
    phoneNo: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'user'
});

sequelize.sync().then(() => {
    console.log('user table linked successfully')
}).catch((error) =>{
    console.error('unable to create table', error)
});

export default {user}