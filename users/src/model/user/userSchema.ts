import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../config/dataBase';
import { User } from '../../utils/interfaces/userInterface';
import { v4 as uuidv4 } from 'uuid';

class user extends Model<User> implements User {
  public id?: string;
  public firstName!: string;
  public lastName!: string;
  public age!: number;
  public email!: string;
  public password!: string;
  public phoneNo!: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;
  public deletedBy?: string;
  public isDeleted?: boolean;
  public otp?: number;
  public otpExipration?: Date;

}

user.init(
  {
    id: {
      type: DataTypes.UUID,
      // autoIncrement: true,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    phoneNo: {
      type: DataTypes.INTEGER,
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
    otp: {
      type: DataTypes.INTEGER,
    },
    otpExipration: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    modelName: 'user',
  }
);

sequelize
  .sync()
  .then(() => {
    console.log('user table linked successfully');
  })
  .catch((error) => {
    console.error('unable to create table', error);
  });

export default { user };
