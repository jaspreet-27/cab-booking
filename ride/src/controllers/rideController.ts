import { Request, Response } from 'express'
import rideService from '../services/rideService'
import { successResponse, failResponse } from '../utils/response/response'
import { statusCode, message } from '../utils/response/constrant'
import logger from '../utils/logger/logger'


// ********************************create user controller******************************************
async function createRide(req: Request, res: Response) {
  try {
    const data = await rideService.createRide(req.body)
    if (data == 'rideAlreadyExist') {
      res
        .status(statusCode.success)
        .json(
          successResponse(
            statusCode.success,
            data,
            message.alreadyExist('Ride'),
          ),
        )
    } else {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.add('Ride')))
    }
  } catch (err) {
    logger.error(message.errorLog('createRide', 'rideController', err))
    res
      .status(statusCode.badRequest)
      .json(
        failResponse(
          statusCode.badRequest,
          err.message,
          message.somethingWrong,
        ),
      )
  }
}

// *********************************get user controller********************************************
async function getRides(req: Request, res: Response) {
  try {
    const data = await rideService.findRide(req.query)
    if (data) {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.fetch('Ride')))
    }
  } catch (err) {
    logger.error(message.errorLog('getRides', 'rideController', err))
    res
      .status(statusCode.badRequest)
      .json(
        failResponse(
          statusCode.badRequest,
          err.message,
          message.somethingWrong,
        ),
      )
  }
}

// *********************************get user by Id controller****************************************
// async function getUser(req: Request, res: Response) {
//   try {
//     const data = await rideService.getUserById(req.params);
//     if (data) {
//       res
//         .status(statusCode.success)
//         .json(successResponse(statusCode.success, data, message.fetch('User')))
//     }
//   } catch (err) {
//     logger.error(message.errorLog('getUserById', 'userController', err))
//     res
//       .status(statusCode.badRequest)
//       .json(
//         failResponse(
//           statusCode.badRequest,
//           err.message,
//           message.somethingWrong,
//         ),
//       )
//   }
// }

// // ********************************update user controller*********************************************
async function updateUser(req: Request, res: Response) {
  try {
    const data = await rideService.updateUser(req.params, req.body)
    res
      .status(statusCode.success)
      .json(successResponse(statusCode.success, data, message.update('User')))
  } catch (err) {
    logger.error(message.errorLog('updateUser', 'userController', err))
    res
      .status(statusCode.badRequest)
      .json(
        failResponse(
          statusCode.badRequest,
          err.message,
          message.somethingWrong,
        ),
      )
  }
}
// // ********************************delete user controller*******************************************
async function deleteUser(req: Request, res: Response) {
  try {
    const data = await rideService.deleteUser(req.body)
    res
      .status(statusCode.success)
      .json(successResponse(statusCode.success, data, message.delete('User')))
  } catch (err) {
    logger.error(message.errorLog('deleteUser', 'userController', err))
    res
      .status(statusCode.badRequest)
      .json(
        failResponse(
          statusCode.badRequest,
          err.message,
          message.somethingWrong,
        ),
      )
  }
}


export default {
 createRide,getRides,updateUser,deleteUser
}

