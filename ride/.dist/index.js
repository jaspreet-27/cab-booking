"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const env_1 = require("./env");
const rideRoutes_1 = __importDefault(require("./src/routes/rideRoutes"));
const Redis = require('ioredis');
exports.Redis = Redis;
const subscriber = new Redis();
const publisher = new Redis();
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
(0, rideRoutes_1.default)(app);
// Function to publish ride-related data
// async function publishRideData(data) {
//     await publisher.publish('rides_channel', JSON.stringify(data));
// }
// Subscribe to user-related data
subscriber.subscribe('users_channel');
// // subscriber.subscribe('')
// Handling user-related data
subscriber.on('message', (channel, message) => {
    console.log(`Received user-related data from ${channel}:`, JSON.parse(message));
    // Process the received user-related data as needed
});
// Start the server
const server = app.listen(env_1.PORT, () => {
    console.log(`Server is running at http://localhost:${env_1.PORT}`);
});
// Handle server shutdown gracefully
process.on('SIGINT', async () => {
    console.log('Server shutting down...');
    server.close();
    await Redis.quit();
    console.log('Server and Redis connection closed.');
    process.exit(0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsc0RBQThCO0FBQzlCLG9EQUE0QjtBQUM1QiwrQkFBNkI7QUFDN0IseUVBQTZDO0FBQzdDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQXFDeEIsc0JBQUs7QUFwQ2QsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUMvQixNQUFNLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRXRCLGNBQWM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUM7QUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsSUFBQSxvQkFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUN6QyxzRUFBc0U7QUFDdEUsSUFBSTtBQUNKLGlDQUFpQztBQUNqQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RDLDhCQUE4QjtBQUU5Qiw2QkFBNkI7QUFDN0IsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLG1EQUFtRDtBQUN2RCxDQUFDLENBQUMsQ0FBQztBQUNILG1CQUFtQjtBQUNuQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUksRUFBRSxHQUFHLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsVUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILG9DQUFvQztBQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUMifQ==