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
exports.handleUserRelatedData = void 0;
const logger_1 = __importDefault(require("../utils/logger/logger"));
const comman_1 = require("../utils/comman/comman");
const userSchema_1 = __importDefault(require("../model/user/userSchema"));
const email_1 = require("../email/email");
const ioredis_1 = __importDefault(require("ioredis"));
const publisher = new ioredis_1.default();
const subscriber = new ioredis_1.default();
subscriber.subscribe('users_channel');
function handleUserRelatedData(channel, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('in');
            console.log('in');
            if (channel === 'rides_channel') {
                const userData = JSON.parse(message);
                console.log('in', userData);
                // Process the received user-related data
                const user = yield userSchema_1.default.user.findOne({ where: { id: userData } });
                if (user) {
                    console.log('User found:', user);
                    // Process the user data as needed
                    yield publisher.publish('users_channel', JSON.stringify(user));
                }
                else {
                    yield publisher.publish('users_channel', null);
                }
            }
        }
        catch (error) {
            logger_1.default.error('Error handling user-related data:', error);
        }
    });
}
exports.handleUserRelatedData = handleUserRelatedData;
// *****************************Create user service*******************************
function createUser(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userSchema_1.default.user.findOne({
                where: { email: body.email, isDeleted: false },
            });
            if (user) {
                return 'userAlreadyExist';
            }
            else {
                const mailDetails = {
                    to: body.email,
                    subject: 'Account created.',
                    text: 'Your account has been successfully created.',
                };
                console.log(mailDetails);
                email_1.mailTransporter.sendMail(mailDetails);
                email_1.mailTransporter.sendMail(mailDetails, function (err) {
                    if (err) {
                        console.log('Error:Email not Sent', err);
                    }
                    else {
                        console.log('Email sent successfully');
                    }
                });
                const hashpw = yield (0, comman_1.hashPassword)(body.password);
                body.password = hashpw;
                // const password = await hashPassword(body.password)
                return yield userSchema_1.default.user.create(body);
            }
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
// *****************************Get user service***********************************
function getUsers(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield userSchema_1.default.user.findAll({
                where: { isDeleted: false },
                attributes: ['id', 'firstName', 'age', 'email', 'password', 'phoneNo'],
                offset: data.page ? (parseInt(data.page) - 1) * parseInt(data.limit) : 0,
                limit: data.limit ? parseInt(data.limit) : 5,
            });
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
//****************************** get user by id service ***********************************
function getUserById(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userSchema_1.default.user.findByPk(params.id);
            if (!users) {
                return 'notExist';
            }
            else {
                return users;
            }
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
// *****************************Update user service*******************************
function updateUser(params, body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userSchema_1.default.user.findOne({
                where: {
                    id: params.id,
                },
            });
            if (!users) {
                return 'notExist';
            }
            else {
                return yield users.update(body);
            }
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
// async function updateUser(params: any, body: any) {
//   try {
//     // Attempt to find a user with the given ID and email
//     const user = await userModel.user.findOne({
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
// *****************************Delete user service*******************************
function deleteUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userSchema_1.default.user.findOne({
                where: {
                    id: params.id,
                },
            });
            if (!users) {
                return 'notExist';
            }
            else {
                const date = new Date();
                return yield users.update({
                    isDeleted: true,
                    deletedAt: date,
                    deletedBy: users.id,
                });
            }
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
// **********************login user service**************************************
// async login(body: any) {
//   try {
//     const user = await userModel.user.findOne({ where: { email: body.email } })
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
function changePasswordService(data, customerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { oldPassword, newPassword, confirmPassword } = data;
            if (newPassword !== confirmPassword) {
                return 'newPassword!=ConfirmPassword';
            }
            const existingUser = yield userSchema_1.default.user.findByPk(customerId);
            if (!existingUser) {
                return 'userDoesNotExists';
            }
            console.log(existingUser);
            const isMatch = yield (0, comman_1.comparePassword)(oldPassword, existingUser.password);
            if (!isMatch) {
                return 'oldPasswordIncorrect';
            }
            const pass = yield (0, comman_1.hashPassword)(newPassword);
            existingUser.password = pass;
            yield existingUser.update({ password: pass });
            return existingUser;
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
function resetPasswordService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, otp, newPassword, confirmPassword } = data;
            if (newPassword !== confirmPassword) {
                return 'newPassword!== confirmPassword';
            }
            const existingUser = yield userSchema_1.default.user.findOne({
                where: {
                    email,
                },
            });
            if (!existingUser) {
                return 'userDoesNotExists';
            }
            const originalOtp = yield existingUser.otp;
            if (originalOtp !== otp) {
                return 'incorrectOtp';
            }
            const otpExipration = existingUser.otpExipration;
            if (otpExipration < new Date(Date.now())) {
                console.log(otpExipration, new Date(Date.now()));
                return 'otpExpired';
            }
            const hashedPassword = yield (0, comman_1.hashPassword)(newPassword);
            yield existingUser.update({ otp: otp, password: hashedPassword, otpExipration: otpExipration });
            const mailDetails = {
                to: email,
                subject: 'Password Changed',
                text: 'Your account password updated successfully',
            };
            console.log(mailDetails);
            email_1.mailTransporter.sendMail(mailDetails, function (err) {
                if (err) {
                    console.log('Error: Email not Sent', err);
                }
                else {
                    console.log('Email sent successfully');
                }
            });
            return 'passwordUpdatedSuccessfully';
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
function resetPasswordEmailService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = data;
            const existingUser = yield userSchema_1.default.user.findOne({
                where: {
                    email,
                },
            });
            if (!existingUser) {
                return 'userDoesNotExists';
            }
            const otp = Math.floor(Math.random() * 999999);
            console.log(otp);
            const otpExipration = new Date(Date.now() + 600000);
            console.log(otpExipration);
            const mailDetails = {
                // from: '',
                to: existingUser === null || existingUser === void 0 ? void 0 : existingUser.email,
                subject: 'Request for password reset.',
                text: `You have received a one-time password (OTP) for updating your password. The otp is ${otp} and will expire in the next 10 minutes.`,
            };
            console.log(mailDetails);
            email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error:Email not Sent', err);
                }
                else {
                    console.log('Email sent successfully', data);
                }
            });
            console.log(otpExipration);
            existingUser.otp = otp;
            existingUser.otpExipration = otpExipration;
            console.log('here', existingUser, 'here');
            // await existingUser.update({
            //   // otp:otp,
            //   otpExpiration:otpExpiration
            // });
            // return await userModel.customer.update(
            //   { otp: otp , otpExpiration:otpExpiration },
            //   { where: { email: data.email } }
            // )
            existingUser.save();
            return existingUser;
        }
        catch (err) {
            logger_1.default.error(err);
            throw new Error(err.message);
        }
    });
}
exports.default = { createUser, updateUser, deleteUser, getUsers, getUserById, changePasswordService, handleUserRelatedData, resetPasswordService, resetPasswordEmailService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvdXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLG1EQUF1RTtBQUN2RSwwRUFBaUQ7QUFDakQsMENBQWlEO0FBRWpELHNEQUE0QjtBQUM1QixNQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFLLEVBQUUsQ0FBQztBQUM5QixNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFLLEVBQUUsQ0FBQztBQUMvQixVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBS3RDLFNBQXNCLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxPQUFlOztRQUMxRSxJQUFJLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sUUFBUSxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQix5Q0FBeUM7Z0JBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sb0JBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBQyxFQUFDLENBQUMsQ0FBQztnQkFDckUsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakMsa0NBQWtDO29CQUVsQyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxD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