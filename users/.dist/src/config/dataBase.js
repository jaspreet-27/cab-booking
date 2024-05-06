"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import Redis from 'ioredis';
// import userSchema from 'src/model/user/userSchema';
// // Create a Redis connection
// const redis = new Redis();
const sequelize = new sequelize_1.Sequelize('Cab Booking', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: true
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
// Function to fetch user data from MySQL and publish it to Redis
// async function publishUserDataToRedis() {
//   try {
//     // Fetch user data from MySQL (assuming you have a User model)
//     const users = await userSchema.user.findAll();
//     console.log(userSchema);
//     // Publish user data to Redis
//     await redis.publish('userdata', JSON.stringify(users));
//     console.log('User data published to Redis');
//   } catch (error) {
//     console.error('Error publishing user data to Redis:', error);
//   }
// }
// publishUserDataToRedis();
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2RhdGFCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQixzREFBc0Q7QUFFdEQsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUU3QixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQzdCLGFBQWEsRUFDYixNQUFNLEVBQ04sRUFBRSxFQUVGO0lBQ0UsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsT0FBTztJQUNoQixPQUFPLEVBQUMsSUFBSTtDQUNiLENBQ0YsQ0FBQztBQUVGLFNBQVM7S0FDTixZQUFZLEVBQUU7S0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUM7QUFFTCxpRUFBaUU7QUFDakUsNENBQTRDO0FBQzVDLFVBQVU7QUFDVixxRUFBcUU7QUFDckUscURBQXFEO0FBQ3JELCtCQUErQjtBQUUvQixvQ0FBb0M7QUFDcEMsOERBQThEO0FBQzlELG1EQUFtRDtBQUNuRCxzQkFBc0I7QUFDdEIsb0VBQW9FO0FBQ3BFLE1BQU07QUFDTixJQUFJO0FBQ0osNEJBQTRCO0FBRTVCLGtCQUFlLFNBQVMsQ0FBQyJ9