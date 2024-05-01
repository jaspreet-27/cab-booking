import express from 'express';
import routes from './src/routes/user/userRoutes';
import { PORT } from './env';
import helmet from 'helmet';
import cors from 'cors';
import Redis from 'ioredis';
import userService from './src/services/userService';
// const publisher = new Redis();
const subscriber = new Redis();



const app = express();


app.use(express.json());

// Use Helmet middleware
app.use(helmet());

// Use CORS middleware
app.use(cors());

// Mount routes
routes(app);

// // Function to publish user-related data
// async function publishUserData(data) {
//   await publisher.publish('users_channel', JSON.stringify(data));
//   console.log('vgfggyh');
// }
// Subscribe to channels
subscriber.subscribe('rides_channel');
//subscriber.subscribe('users_channel');



// Handling ride-related data
subscriber.on('message', async (channel, message) => {
  console.log(`Received ride-related data from ${channel}:`, JSON.parse(message));
  await userService.handleUserRelatedData(channel, message);


});
// subscriber.on('message', async (channel:any, message:any) => {
// //  await handleUserRelatedData(channel, message);
//   // console.log(`Received ride-related data from ${channel}:`, JSON.parse(message));
// });




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

