"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../../services/userService"));
const response_1 = require("../../utils/response/response");
const constrant_1 = require("../../utils/response/constrant");
const logger_1 = __importDefault(require("../../utils/logger/logger"));
// ********************************create user controller******************************************
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.createUser(req.body);
            if (data == 'userAlreadyExist') {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.alreadyExist('User')));
            }
            else {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.add('User')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('createUser', 'userController', err));
            res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
// *********************************get user controller********************************************
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.getUsers(req.query);
            if (data) {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.fetch('User')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('getUsers', 'userController', err));
            res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
// *********************************get user by Id controller****************************************
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.getUserById(req.params);
            if (data) {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.fetch('User')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('getUserById', 'userController', err));
            res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
// ********************************update user controller*********************************************
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.updateUser(req.params, req.body);
            res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.update('User')));
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('updateUser', 'userController', err));
            res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
// ********************************delete user controller*******************************************
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.deleteUser(req.params);
            res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.delete('User')));
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('deleteUser', 'userController', err));
            res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
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
function changePassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const CustomerId = req.params.id;
            const customerData = yield userService_1.default.changePasswordService(data, CustomerId);
            if (customerData == 'newPassword!=ConfirmPassword') {
                res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.notAllowed, data, constrant_1.message.somethingWrong));
            }
            else if (customerData == 'userDoesNotExists') {
                res.status(constrant_1.statusCode.notFound).json((0, response_1.failResponse)(constrant_1.statusCode.emailOrUserExist, data, constrant_1.message.notExist('User')));
            }
            else if (customerData == 'oldPasswordIncorrect') {
                res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, data, constrant_1.message.somethingWrong));
            }
            else {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.update('Password')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('userUpdate', 'userController', err));
            res.status(constrant_1.statusCode.emailOrUserExist).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
function resetPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const customerData = yield userService_1.default.resetPasswordService(data);
            if (customerData === 'newPassword!== confirmPassword') {
                res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.notAllowed, data, constrant_1.message.somethingWrong));
            }
            else if (customerData === 'userDoesNotExists') {
                res.status(constrant_1.statusCode.notFound).json((0, response_1.failResponse)(constrant_1.statusCode.emailOrUserExist, data, constrant_1.message.notExist('User')));
            }
            else if (customerData === 'incorrectOtp' || customerData === 'otpExpired') {
                res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, data, constrant_1.message.somethingWrong));
            }
            else {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.update('Password')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('userUpdate', 'userController', err));
            res.status(constrant_1.statusCode.emailOrUserExist).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
function resetPasswordEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const customerData = yield userService_1.default.resetPasswordEmailService(data);
            if (customerData == 'userDoesNotExists') {
                res.status(constrant_1.statusCode.badRequest).json((0, response_1.failResponse)(constrant_1.statusCode.notAllowed, data, constrant_1.message.notExist('User')));
            }
            else {
                res.status(constrant_1.statusCode.success).json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.add('Otp')));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('userUpdate', 'userController', err));
            res.status(constrant_1.statusCode.emailOrUserExist).json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
exports.default = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUser,
    changePassword,
    resetPassword,
    resetPasswordEmail,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlci91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDZFQUFxRDtBQUNyRCw0REFBOEU7QUFDOUUsOERBQXFFO0FBQ3JFLHVFQUErQztBQUUvQyxtR0FBbUc7QUFDbkcsU0FBZSxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQ25ELElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELElBQUksSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSwwQkFBZSxFQUFDLHNCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0csQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSwwQkFBZSxFQUFDLHNCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEcsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBVSxDQUFDLFVBQVUsQ0FBQyxD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