import { Request, Response } from 'express'
import userService from '../../services/userService'
import { successResponse, failResponse } from '../../utils/response/response'
import { statusCode, message } from '../../utils/response/constrant'
import logger from '../../utils/logger/logger'

// ********************************create user controller******************************************
async function createUser(req: Request, res: Response) {
  try {
    const data: any = await userService.createUser(req.body)

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
  } catch (err: any) {
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
  } catch (err: any) {
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
    const data = await userService.getUserById(req.params, req.body)
    if (data) {
      res
        .status(statusCode.success)
        .json(successResponse(statusCode.success, data, message.fetch('User')))
    }
  } catch (err: any) {
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
  } catch (err: any) {
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
  } catch (err: any) {
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
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
}
