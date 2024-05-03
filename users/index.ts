import express from 'express';
import routes from './src/routes/user/userRoutes';
import { PORT } from './env';
import helmet from 'helmet';
import cors from 'cors';

import {subscribeAll} from './src/redis';

subscribeAll();
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

// subscriber.on('message', async (channel:any, message:any) => {
// //  await handleUserRelatedData(channel, message);
//   // console.log(`Received ride-related data from ${channel}:`, JSON.parse(message));
// });




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

