import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize(
  // 'Cab Booking',
  // 'root',
  // '',
  process.env.DATABASE,
  process.env.dbUsername,
  process.env.bPassword,


  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: true
  },

);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
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

export default sequelize;
