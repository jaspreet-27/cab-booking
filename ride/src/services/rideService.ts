import logger from '../utils/logger/logger';
import rideModel from '../model/rideSchema';
import { Ride } from '../utils/interfaces/rideInterface';
import Redis from 'ioredis';
import redisResponse from '../redis/redisResponse'
const publisher = new Redis();
const subscriber = new Redis();




async function createRide(body: Ride) {
    try {
        // Check if the ride already exists
        const ride = await rideModel.ride.findByPk(body.id);
        if (ride) {
            return 'rideAlreadyExist';
        } else {
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
            const response = await redisResponse(body);
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
                console.log(body , 'Creating ride entry...');
                 return await rideModel.ride.create(body);
                // return 'rideCreated';
            } else {
                console.log('User not found.');
                return 'userNotFound';
            }
        }
    } catch (err) {
        logger.error(err);
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
    return await rideModel.ride.findAll({
      where: { isDeleted: false },
      attributes: ['id', 'from', 'to', 'driverId', 'time', 'date', 'status', 'price'],
      offset: data.page ? (parseInt(data.page) - 1) * parseInt(data.limit) : 0,
      limit: data.limit ? parseInt(data.limit) : 5,
    })
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}

//****************************** get user by id service ***********************************
async function getUserById(params:Ride) {
  try {
    const users = await rideModel.ride.findByPk(params.id)
    if (!users) {
      return 'notExist'
    } else {
      return users
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}
// // *****************************Update user service*******************************
async function updateUser(params, body:Ride) {
  try {
    const users = await rideModel.ride.findOne({
      where: {
        id: params.id,
      },
    })
    if (!users) {
      return 'notExist'
    } else {
      return await users.update(body)
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}


// // *****************************Delete user service*******************************
async function deleteUser(params:Ride) {
  try {
    const users = await rideModel.ride.findOne({
      where: {
        id: params.id,
      },
    })
    if (!users) {
      return 'notExist'
    } else {
      const date = new Date()
      return await users.update({
        isDeleted: true,
        deletedAt: date,
        deletedBy: users.id,
      })
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}


export default { createRide ,findRide ,getUserById,updateUser,deleteUser}
