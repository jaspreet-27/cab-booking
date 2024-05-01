import logger from '../utils/logger/logger';
import rideModel from '../model/rideSchema';
import { Ride } from '../utils/interfaces/rideInterface';
import Redis from 'ioredis';
const publisher = new Redis();
const subscriber = new Redis();

// async function createRide(body: Ride) {
//     try {
//         const ride = await rideModel.ride.findByPk(body.id);
//         console.log(ride,'2')
//         if (ride) {
//             return 'rideAlreadyExist';
//         } else {
//             // Publish user ID
//             async function publishUserId(userData) {
//                 await publisher.publish('rides_channel', JSON.stringify(userData));
//                 console.log(userData,'3')
//             }
            
//             // Publish user ID and wait for response
//             await publishUserId(body.driverId);
//             subscriber.subscribe('users_channel');
//             // subscriber.subscribe('')

//             // Handling user-related data
//             // subscriber.on('message', (channel, message) => {
//             //     console.log(`Received user-related data from ${channel}:`, JSON.parse(message));
//             //     // Process the received user-related data as needed
//             // });
//             subscriber.on('message', async (channel, message) => {
//                 console.log(`Received user-related data from ${channel}:`, JSON.parse(message));
//                 // Process the received user-related data as needed
//                 const userData = JSON.parse(message);
//                         if (userData.id === body.driverId) {
//                             console.log('User found');

//                             await rideModel.ride.create(body);
                           
//                         } else {
//                             console.log('User not found');
//                             console.log('kitty not found')
//                         }
//             //
//             });
//             //
//             // Return "yes" if user ID is published, "no" otherwise
//             const response = await new Promise((resolve, reject) => {
//                 subscriber.once('message', (channel, message) => {
//                     if (channel === 'users_channel') {
//                         const userData = JSON.parse(message);
//                         console.log(userData , "userData.....")
//                         console.log(body.driverId , "body.driverId.....")
//                         if (userData.id === body.driverId) {
//                             console.log('User found');
//                             resolve('yes');
//                         } else {
//                             console.log('User not found');
//                             console.log('kitty not found');
//                             resolve('no');
//                         }
//                     }
//                 });
//             });
//             // If user is found, create the ride entry
//             return response;
//             // if (response === 'yes') {
//             //     console.log('srdtfbhnkm');
                
//             // } else {
//             //     return 'userNotFound';
//             //     //response
//             // }
//         }
//     } catch (err) {

//         logger.error(err);
//         throw new Error(err.message);
//     }
// }


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

            // Wait for response about user
            const response = await new Promise((resolve, reject) => {
                subscriber.once('message', (channel, message) => {
                    if (channel === 'users_channel') {
                        const userData = JSON.parse(message);
                        console.log(userData, 'Received user data');
                        if (userData.id === body.driverId) {
                            console.log('User found');
                            resolve('yes');
                        } else {
                            console.log('User not found');
                            resolve('no');
                        }
                    }
                });
            });

            // If user is found, create the ride entry
            if (response === 'yes') {
                console.log(body , 'Creating ride entry...');
                await rideModel.ride.create(body);
                return 'rideCreated';
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


// async function createRide(body: Ride) {
//     try {
//         // Check if the ride already exists
//         const existingRide = await rideModel.ride.findByPk(body.id);
//         if (existingRide) {
//             return 'rideAlreadyExist';
//         } else {
//             // Publish driver ID
//             await publisher.publish('rides_channel', JSON.stringify(body.driverId));

//             // Subscribe to users channel to receive responses
//             subscriber.subscribe('users_channel');

//             // Wait for response about user
//             const response = await new Promise((resolve, reject) => {
//                 subscriber.once('message', (channel, message) => {
//                     if (channel === 'users_channel') {
//                         const userData = JSON.parse(message);
//                         if (userData === body.driverId) {
//                             console.log('User found');
//                             resolve('yes');
//                         } else {
//                             console.log('User not found');
//                             resolve('no');
//                         }
//                     }
//                 });
//             });

//             // If user is found, create the ride entry
//             if (response === 'yes') {
//                 console.log('User found. Creating ride entry...');
//                 return await rideModel.ride.create(body);
//             } else {
//                 console.log('User not found.');
//                 return 'userNotFound';
//             }
//         }
//     } catch (err) {
//         logger.error(err);
//         throw new Error(err.message);
//     }
// }
                                                                                        

// // *****************************Get user service***********************************
// async function findRide(data) {
//   try {
//     return await rideModel.ride.findAll({
//       where: { isDeleted: false },
//       attributes: ['id', 'from', 'to', 'driverId', 'time', 'date', 'status', 'price'],
//       offset: data.page ? (parseInt(data.page) - 1) * parseInt(data.limit) : 0,
//       limit: data.limit ? parseInt(data.limit) : 5,
//     })
//   } catch (err) {
//     logger.error(err)
//     throw new Error(err.message)
//   }
// }

// //****************************** get user by id service ***********************************
// async function getUserById(params:UserGetAttribute) {
//   try {
//     const users = await rideModel.ride.findByPk(params.id)
//     if (!users) {
//       return 'notExist'
//     } else {
//       return users
//     }
//   } catch (err) {
//     logger.error(err)
//     throw new Error(err.message)
//   }
// }
// // *****************************Update user service*******************************
// async function updateUser(params, body:UserUpdateAttribute) {
//   try {
//     const users = await rideModel.ride.findOne({
//       where: {
//         id: params.id,
//       },
//     })
//     if (!users) {
//       return 'notExist'
//     } else {
//       return await users.update(body)
//     }
//   } catch (err) {
//     logger.error(err)
//     throw new Error(err.message)
//   }
// }


// async function updateUser(params: any, body: any) {
//   try {
//     // Attempt to find a user with the given ID and email
//     const user = await rideModel.ride.findOne({
//       where: {
//         id: params.id,
//         email: {
//           [Op.ne]: body.email // Exclude this particular email value
//         }
//       },
//     });

//     // If user doesn't exist, return 'notExist'
//     if (!user) {
//       return 'notExist';
//     } else {
//       // If user exists, update its information with the provided body data
//       if(user.email === body.email)
//         {
//           // mesage
//         }else{
//           // update user

//           return await user.update(body);
//         }

//     }
//   } catch (err: any) {
//     // Log any errors and rethrow the error with a custom message
//     logger.error(err);
//     throw new Error(err.message);
//   }
// }



// // *****************************Delete user service*******************************
// async function deleteUser(params:UserDeleteAttribute) {
//   try {
//     const users = await rideModel.ride.findOne({
//       where: {
//         id: params.id,
//       },
//     })
//     if (!users) {
//       return 'notExist'
//     } else {
//       const date = new Date()
//       return await users.update({
//         isDeleted: true,
//         deletedAt: date,
//         deletedBy: users.id,
//       })
//     }
//   } catch (err) {
//     logger.error(err)
//     throw new Error(err.message)
//   }
// }
// // **********************login user service**************************************


// async login(body: any) {
//   try {
//     const user = await rideModel.ride.findOne({ where: { email: body.email } })

//     if (user) {
//       if ((await comparePassword(body.password, user.password)) === true) {
//         const token = jwt.sign({ userId: user.id }, jwtSecret, {
//           expiresIn: 60 * 60,
//         })
//         user.dataValues['token'] = token
//         delete user.dataValues.password
//         db.authentications.create({
//           // Save authentications
//           userId: user.id,
//           authToken: token,
//           expiresIn: 60 * 60,
//         })

//         return user
//       } else {
//         return 'invalidUser'
//       }
//     } else {
//       return 'notExist'
//     }
//   } catch (err: any) {
//     logger.error(err)
//     throw new Error(err.message)
//   }
// }

export default { createRide }
