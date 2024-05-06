"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger/logger"));
const rideSchema_1 = __importDefault(require("../model/rideSchema"));
const ioredis_1 = __importDefault(require("ioredis"));
const redisResponse_1 = __importDefault(require("../redis/redisResponse"));
const publisher = new ioredis_1.default();
const subscriber = new ioredis_1.default();
async function createRide(body) {
    try {
        // Check if the ride already exists
        const ride = await rideSchema_1.default.ride.findByPk(body.id);
        if (ride) {
            return 'rideAlreadyExist';
        }
        else {
            // Subscribe to users channel to receive responses
            subscriber.subscribe('users_channel');
            // Publish user ID
            async function publishUserId(userData) {
                await publisher.publish('rides_channel', JSON.stringify(userData));
                console.log(userData, 'User ID published');
            }
            // Publish user ID and wait for response
            await publishUserId(body.driverId);
            // // Wait for response about user
            const response = await (0, redisResponse_1.default)(body);
            // const response = await new Promise((resolve, reject) => {
            //     subscriber.once('message', (channel, message) => {
            //         if (channel === 'users_channel') {
            //             const userData = JSON.parse(message);
            //             console.log(userData, 'Received user data');
            //             if (userData.id === body.driverId) {
            //                 console.log('User found');
            //                 resolve('yes');
            //             } else {
            //                 console.log('User not found');
            //                 resolve('no');
            //             }
            //         }
            //     });
            // });
            // If user is found, create the ride entry
            if (response === 'yes') {
                console.log(body, 'Creating ride entry...');
                return await rideSchema_1.default.ride.create(body);
                // return 'rideCreated';
            }
            else {
                console.log('User not found.');
                return 'userNotFound';
            }
        }
    }
    catch (err) {
        logger_1.default.error(err);
        throw new Error(err.message);
    }
}
// async function waitForUserResponse(body: Ride): Promise<string> {
//     return new Promise((resolve, reject) => {
//         subscriber.once('message', (channel, message) => {
//             if (channel === 'users_channel') {
//                 const userData = JSON.parse(message);
//                 console.log(userData, 'Received user data');
//                 if (userData.id === body.driverId) {
//                     console.log('User found');
//                     resolve('yes');
//                 } else {
//                     console.log('User not found');
//                     resolve('no');
//                 }
//             }
//         });
//     });
// }
// // *****************************Get user service***********************************
async function findRide(data) {
    try {
        return await rideSchema_1.default.ride.findAll({
            where: { isDeleted: false },
            attributes: ['id', 'from', 'to', 'driverId', 'time', 'date', 'status', 'price'],
            offset: data.page ? (parseInt(data.page) - 1) * parseInt(data.limit) : 0,
            limit: data.limit ? parseInt(data.limit) : 5,
        });
    }
    catch (err) {
        logger_1.default.error(err);
        throw new Error(err.message);
    }
}
//****************************** get user by id service ***********************************
async function getUserById(params) {
    try {
        const users = await rideSchema_1.default.ride.findByPk(params.id);
        if (!users) {
            return 'notExist';
        }
        else {
            return users;
        }
    }
    catch (err) {
        logger_1.default.error(err);
        throw new Error(err.message);
    }
}
// // *****************************Update user service*******************************
async function updateUser(params, body) {
    try {
        const users = await rideSchema_1.default.ride.findOne({
            where: {
                id: params.id,
            },
        });
        if (!users) {
            return 'notExist';
        }
        else {
            return await users.update(body);
        }
    }
    catch (err) {
        logger_1.default.error(err);
        throw new Error(err.message);
    }
}
// // *****************************Delete user service*******************************
async function deleteUser(params) {
    try {
        const users = await rideSchema_1.default.ride.findOne({
            where: {
                id: params.id,
            },
        });
        if (!users) {
            return 'notExist';
        }
        else {
            const date = new Date();
            return await users.update({
                isDeleted: true,
                deletedAt: date,
                deletedBy: users.id,
            });
        }
    }
    catch (err) {
        logger_1.default.error(err);
        throw new Error(err.message);
    }
}
exports.default = { createRide, findRide, getUserById, updateUser, deleteUser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlkZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvcmlkZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvRUFBNEM7QUFDNUMscUVBQTRDO0FBRTVDLHNEQUE0QjtBQUM1QiwyRUFBa0Q7QUFDbEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBSyxFQUFFLENBQUM7QUFDOUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBSyxFQUFFLENBQUM7QUFLL0IsS0FBSyxVQUFVLFVBQVUsQ0FBQyxJQUFVO0lBQ2hDLElBQUksQ0FBQztRQUNELG1DQUFtQztRQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLG9CQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNQLE9BQU8sa0JBQWtCLENBQUM7UUFDOUIsQ0FBQzthQUFNLENBQUM7WUFDSixrREFBa0Q7WUFDbEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV0QyxrQkFBa0I7WUFDbEIsS0FBSyxVQUFVLGFBQWEsQ0FBQyxRQUFRO2dCQUNqQyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBRUQsd0NBQXdDO1lBQ3hDLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVuQyxrQ0FBa0M7WUFDbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHVCQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsNERBQTREO1lBQzVELHlEQUF5RDtZQUN6RCw2Q0FBNkM7WUFDN0Msb0RBQW9E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