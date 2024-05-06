"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rideService_1 = __importDefault(require("../services/rideService"));
const response_1 = require("../utils/response/response");
const constrant_1 = require("../utils/response/constrant");
const logger_1 = __importDefault(require("../utils/logger/logger"));
// ********************************create user controller******************************************
async function createRide(req, res) {
    try {
        const data = await rideService_1.default.createRide(req.body);
        if (data == 'rideAlreadyExist') {
            res
                .status(constrant_1.statusCode.success)
                .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.alreadyExist('Ride')));
        }
        else {
            res
                .status(constrant_1.statusCode.success)
                .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.add('Ride')));
        }
    }
    catch (err) {
        logger_1.default.error(constrant_1.message.errorLog('createRide', 'rideController', err));
        res
            .status(constrant_1.statusCode.badRequest)
            .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
    }
}
// *********************************get user controller********************************************
async function getRides(req, res) {
    try {
        const data = await rideService_1.default.findRide(req.query);
        if (data) {
            res
                .status(constrant_1.statusCode.success)
                .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.fetch('Ride')));
        }
    }
    catch (err) {
        logger_1.default.error(constrant_1.message.errorLog('getRides', 'rideController', err));
        res
            .status(constrant_1.statusCode.badRequest)
            .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
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
async function updateUser(req, res) {
    try {
        const data = await rideService_1.default.updateUser(req.params, req.body);
        res
            .status(constrant_1.statusCode.success)
            .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.update('User')));
    }
    catch (err) {
        logger_1.default.error(constrant_1.message.errorLog('updateUser', 'userController', err));
        res
            .status(constrant_1.statusCode.badRequest)
            .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
    }
}
// // ********************************delete user controller*******************************************
async function deleteUser(req, res) {
    try {
        const data = await rideService_1.default.deleteUser(req.body);
        res
            .status(constrant_1.statusCode.success)
            .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.delete('User')));
    }
    catch (err) {
        logger_1.default.error(constrant_1.message.errorLog('deleteUser', 'userController', err));
        res
            .status(constrant_1.statusCode.badRequest)
            .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
    }
}
exports.default = {
    createRide, getRides, updateUser, deleteUser
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlkZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvcmlkZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwRUFBaUQ7QUFDakQseURBQTBFO0FBQzFFLDJEQUFpRTtBQUNqRSxvRUFBMkM7QUFHM0MsbUdBQW1HO0FBQ25HLEtBQUssVUFBVSxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbkQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsSUFBSSxJQUFJLElBQUksa0JBQWtCLEVBQUUsQ0FBQztZQUMvQixHQUFHO2lCQUNBLE1BQU0sQ0FBQyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDMUIsSUFBSSxDQUNILElBQUEsMEJBQWUsRUFDYixzQkFBVSxDQUFDLE9BQU8sRUFDbEIsSUFBSSxFQUNKLG1CQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUM3QixDQUNGLENBQUE7UUFDTCxDQUFDO2FBQU0sQ0FBQztZQUNOLEdBQUc7aUJBQ0EsTUFBTSxDQUFDLHNCQUFVLENBQUMsT0FBTyxDQUFDO2lCQUMxQixJQUFJLENBQUMsSUFBQSwwQkFBZSxFQUFDLHNCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekUsQ0FBQztJQUNILENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkUsR0FBRzthQUNBLE1BQU0sQ0FBQyxzQkFBVSxDQUFDLFVBQVUsQ0FBQzthQUM3QixJQUFJ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