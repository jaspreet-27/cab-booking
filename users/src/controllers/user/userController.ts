import { Request, Response } from 'express';
import userService from '../../services/userService';
import { successResponse, failResponse } from '../../utils/response/response';
import { statusCode,message } from '../../utils/response/constrant';
import logger from '../../utils/logger/logger';


async function createUser(req: Request, res: Response) {
    try {
      const data:any = await userService.createUser(req.body)

      if (data == 'userAlreadyExist') {
        res.status(statusCode.success).json(successResponse(statusCode.success, data, message.alreadyExist('User')))
      } else {
        res.status(statusCode.success).json(successResponse(statusCode.success, data, message.add('User')))
      }
    } catch (err: any) {
      logger.error(message.errorLog('userAdd', 'userController', err))
      res.status(statusCode.badRequest).json(failResponse(statusCode.badRequest, err.message, message.somethingWrong))
    }
  }

export default {
    createUser
};