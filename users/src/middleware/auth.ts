/*
 * @file: common.js
 * @description: It contain auth functions.
 * @author: Rajneshwar Singh
 */

import jwt from 'jsonwebtoken';
import { db } from '../models';
import { message, statusCode } from '../utils/response/constrant';
import { failResponse } from '../utils/response/response';

/* Environment */
import { config } from '../config/default';
const key: string = process.env.NODE_ENV || 'development';
const jwtSecret = config[key].secret.jwt;

async function checkAuthToken(req: any, res: any, next: any) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace('Bearer ', '');
    await jwt.verify(token, jwtSecret, async function (err: any, decoded: any) {
      if (err) {
        if (err.message === 'jwt expired') {
          res.status(statusCode.tokenExpired).json(failResponse(statusCode.tokenExpired, message.tokenExpired, message.tokenExpired));
        } else {
          res.status(statusCode.tokenExpired).json(failResponse(statusCode.tokenExpired, err.message, message.tokenExpired));
        }
      } else {
        const authentication = await db.authentications.findOne({
          where: {
            userId: decoded.userId,
            authToken: token,
          },
        });
        if (authentication) {
          req.user = await db.users.findOne({ where: { id: authentication.userId }, attributes: ['id', 'name', 'age', 'email'] });
          next();
        } else {
          res.status(statusCode.tokenExpired).json(failResponse(statusCode.tokenExpired, message.tokenExpired, message.tokenExpired));
        }
      }
    });
  } else {
    res.status(statusCode.authTokenRequired).json(failResponse(statusCode.authTokenRequired, message.tokenRequried, message.tokenRequried));
  }
}

export default checkAuthToken;
