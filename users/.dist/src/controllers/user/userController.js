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
function loginCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield userService_1.default.loginCustomerService(req.body);
            if (data == 'userDoesNotExist') {
                res
                    .status(constrant_1.statusCode.notFound)
                    .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, data, constrant_1.message.notExist('User')));
            }
            else if (data == 'incorrectPassword') {
                res
                    .status(constrant_1.statusCode.wrongPassword)
                    .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, data, constrant_1.message.invalidlogin));
            }
            else {
                res
                    .status(constrant_1.statusCode.success)
                    .json((0, response_1.successResponse)(constrant_1.statusCode.success, data, constrant_1.message.login));
            }
        }
        catch (err) {
            logger_1.default.error(constrant_1.message.errorLog('userAdd', 'userController', err));
            res
                .status(constrant_1.statusCode.badRequest)
                .json((0, response_1.failResponse)(constrant_1.statusCode.badRequest, err.message, constrant_1.message.somethingWrong));
        }
    });
}
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
    loginCustomer,
    resetPasswordEmail,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlci91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDZFQUFxRDtBQUNyRCw0REFBOEU7QUFDOUUsOERBQXFFO0FBQ3JFLHVFQUErQztBQUUvQyxtR0FBbUc7QUFDbkcsU0FBZSxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQ25ELElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELElBQUksSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSwwQkFBZSxFQUFDLHNCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0csQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSwwQkFBZSxFQUFDLHNCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEcsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBVSxDQUFDLFVBQVUsQ0FBQyxD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