"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const rideEnum_1 = require("../utils/enums/rideEnum");
class ride extends sequelize_1.Model {
}
ride.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    from: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: sequelize_1.DataTypes.DATE
    },
    driverId: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false
        defaultValue: "wewe"
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: Object.values(rideEnum_1.Status),
        defaultValue: rideEnum_1.Status.isAvailable
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
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
}, {
    sequelize: database_1.default,
    modelName: 'ride',
});
database_1.default
    .sync()
    .then(() => {
    console.log('ride table linked successfully');
})
    .catch((error) => {
    console.error('unable to create table', error);
});
exports.default = { ride };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlkZVNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC9yaWRlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQThEO0FBQzlELGtFQUEyQztBQUkzQyxzREFBaUQ7QUFFakQsTUFBTSxJQUFLLFNBQVEsaUJBQVc7Q0FjN0I7QUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ04sRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQzlCLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixtQkFBbUI7UUFDbkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxLQUFLO1FBQ3JCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFDLHFCQUFTLENBQUMsSUFBSTtRQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBTSxDQUFDO1FBQzdCLFlBQVksRUFBQyxpQkFBTSxDQUFDLFdBQVc7S0FDbEM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUMscUJBQVMsQ0FBQyxJQUFJO1FBQ25CLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtLQUN2QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN6QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7Q0FDSixFQUFFO0lBQ0MsU0FBUyxFQUFULGtCQUFTO0lBQ1QsU0FBUyxFQUFFLE1BQU07Q0FDcEIsQ0FBQyxDQUFBO0FBRUYsa0JBQVM7S0FDSixJQUFJLEVBQUU7S0FDTixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUMsQ0FBQTtBQUVOLGtCQUFlLEVBQUUsSUFBSSxFQUFFLENBQUEifQ==