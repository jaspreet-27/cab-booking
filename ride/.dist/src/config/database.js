"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('Cab Booking', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXFDO0FBRXJDLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FDN0IsYUFBYSxFQUNiLE1BQU0sRUFDTixFQUFFLEVBRUY7SUFDRSxJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxPQUFPO0NBQ2pCLENBQ0YsQ0FBQTtBQUVELFNBQVM7S0FDTixZQUFZLEVBQUU7S0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQzlELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFFSixrQkFBZSxTQUFTLENBQUEifQ==