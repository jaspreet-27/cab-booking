import { Request, Response } from 'express'
import userService from '../../services/userService'
import { successResponse, failResponse } from '../../utils/response/response'
import { statusCode, message } from '../../utils/response/constrant'
import logger from '../../utils/logger/logger'


// ********************************create user controller******************************************
async function createUser(req: Request, res: Response) {
  try {
    const data = await userService.createUser(req.body)

    if (data == 'userAlreadyExist') {
      res
        .status(statusCode.success)
        .json(
          successResponse(
            statusCode.success,
            data,
            message.alreadyExist('User'),
          ),
        )
    } else {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.add('User')))
    }
  } catch (err) {
    logger.error(message.errorLog('createUser', 'userController', err))
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
async function getUsers(req: Request, res: Response) {
  try {
    const data = await userService.getUsers(req.query)
    if (data) {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.fetch('User')))
    }
  } catch (err) {
    logger.error(message.errorLog('getUsers', 'userController', err))
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
async function getUser(req: Request, res: Response) {
  try {
    const data = await userService.getUserById(req.params)
    if (data) {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.fetch('User')))
    }
  } catch (err) {
    logger.error(message.errorLog('getUserById', 'userController', err))
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

// ********************************update user controller*********************************************
async function updateUser(req: Request, res: Response) {
  try {
    const data = await userService.updateUser(req.params, req.body)
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
// ********************************delete user controller*******************************************
async function deleteUser(req: Request, res: Response) {
  try {
    const data = await userService.deleteUser(req.params)
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
// ***********************login api****************************************



//  async login(req: Request, res: Response) {
//   try {
//     const data = await userService.login(req.body)
//     if (data === 'invalidUser') {
//       res.status(statusCode.success).json(failResponse(statusCode.success, data, message.invalidlogin))
//     } else if (data === 'notExist') {
//       res.status(statusCode.success).json(failResponse(statusCode.success, data, message.notExist('User')))
//     } else {
//       res.status(statusCode.success).json(successResponse(statusCode.success, data, message.login))
//     }
//   } catch (err: any) {
//     logger.error(message.errorLog('login', 'userController', err))
//     res.status(statusCode.badRequest).json(failResponse(statusCode.badRequest, err.message, message.somethingWrong))
//   }
// }

async function changePassword(req: Request, res: Response) {
  try {
    const data = req.body
    const CustomerId: string = req.params.id

    const customerData = await userService.changePasswordService(
      data,
      CustomerId,
    )
    if (customerData == 'newPassword!=ConfirmPassword') {
      res
        .status(statusCode.badRequest)
        .json(failResponse(statusCode.notAllowed, data, message.somethingWrong))
    } else if (customerData == 'userDoesNotExists') {
      res
        .status(statusCode.notFound)
        .json(
          failResponse(
            statusCode.emailOrUserExist,
            data,
            message.notExist('User'),
          ),
        )
    } else if (customerData == 'oldPasswordIncorrect') {
      res
        .status(statusCode.badRequest)
        .json(failResponse(statusCode.badRequest, data, message.invalidRequest))
    } else {
      res
        .status(statusCode.success)
        .json(
          successResponse(statusCode.success, data, message.update('Password')),
        )
    }
  } catch (err) {
    logger.error(message.errorLog('userUpdate', 'userController', err))
    res
      .status(statusCode.emailOrUserExist)
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
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
  changePassword
  // login
}

