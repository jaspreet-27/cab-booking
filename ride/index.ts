import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { PORT } from './env';
import routes from './src/routes/rideRoutes';
const Redis = require('ioredis');
const subscriber = new Redis();
const publisher = new Redis();
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
routes(app);
// Function to publish ride-related data
async function publishRideData(data) {
    await publisher.publish('rides_channel', JSON.stringify(data));
}
// Subscribe to user-related data
subscriber.subscribe('users_channel');
// // subscriber.subscribe('')

// Handling user-related data
subscriber.on('message', (channel, message) => {
    console.log(`Received user-related data from ${channel}:`, JSON.parse(message));
    // Process the received user-related data as needed
});
// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Handle server shutdown gracefully
process.on('SIGINT', async () => {
    console.log('Server shutting down...');
    server.close();
    await Redis.quit();
    console.log('Server and Redis connection closed.');
    process.exit(0);
});

export { Redis};

