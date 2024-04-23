import logger from '../utils/logger/logger'
import rideModel from '../model/rideSchema'
import { Ride } from '../utils/interfaces/rideInterface'
import userModel from "../../../users/src/model/user/userSchema"





// *****************************Create user service*******************************

async function createRide(body: Ride) {
  try {
    const ride = await rideModel.ride.findByPk(body.id)
      // where: { id: body.id, isDeleted: false },
    
    // const driver = await userModel.user.findByPk(body.driverId)
    //   if(driver)
    //     console.log(driver)
      
  

    if (ride) {
    return 'rideAlreadyExist'
  } else {
    return await rideModel.ride.create(body)
  }}
catch (err) {
  logger.error(err)
  throw new Error(err.message)
}}


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

export default { createRide, findRide }
