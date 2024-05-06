"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dataBase_1 = __importDefault(require("../../config/dataBase"));
class user extends sequelize_1.Model {
}
user.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        // autoIncrement: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    phoneNo: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    deletedBy: {
        type: sequelize_1.DataTypes.STRING,
    },
    isDeleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    otp: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    otpExipration: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: dataBase_1.default,
    modelName: 'user',
});
dataBase_1.default
    .sync()
    .then(() => {
    console.log('user table linked successfully');
})
    .catch((error) => {
    console.error('unable to create table', error);
});
exports.default = { user };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbC91c2VyL3VzZXJTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBd0Q7QUFDeEQscUVBQThDO0FBSTlDLE1BQU0sSUFBSyxTQUFRLGlCQUFXO0NBZTdCO0FBRUQsSUFBSSxDQUFDLElBQUksQ0FDUDtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsdUJBQXVCO1FBQ3ZCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDOUIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDdkI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztLQUN4QjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87S0FDeEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBQ3JCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtLQUNyQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7S0FDckI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixZQUFZLEVBQUUsS0FBSztLQUNwQjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87S0FDeEI7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBQ3JCO0NBQ0YsRUFDRDtJQUNFLFNBQVMsRUFBVCxrQkFBUztJQUNULFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQ0YsQ0FBQztBQUVGLGtCQUFTO0tBQ04sSUFBSSxFQUFFO0tBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDLENBQUM7QUFFTCxrQkFBZSxFQUFFLElBQUksRUFBRSxDQUFDIn0=