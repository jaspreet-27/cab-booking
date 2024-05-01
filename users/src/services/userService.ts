import logger from '../utils/logger/logger';
import { hashPassword, comparePassword } from '../utils/comman/comman';
import userModel from '../model/user/userSchema';
import { mailTransporter } from '../email/email';
import { User, UserUpdateAttribute, UserDeleteAttribute, UserGetAttribute } from '../utils/interfaces/userInterface';
import Redis from 'ioredis';
const publisher = new Redis();
const subscriber = new Redis();
subscriber.subscribe('users_channel');




export async function handleUserRelatedData(channel: string, message: string) {
  try {
    console.log('in');
    console.log('in');
    if (channel === 'rides_channel') {
      const userData:any = JSON.parse(message);
      console.log('in',userData);
      // Process the received user-related data
      const user = await userModel.user.findOne({ where: { id :userData}});
      if (user) {
        console.log('User found:', user);
        // Process the user data as needed

        await publisher.publish('users_channel', JSON.stringify(user));
      } else {
        await publisher.publish('users_channel', null);
      }}} catch (error) {
    logger.error('Error handling user-related data:', error);
  }
}


// *****************************Create user service*******************************

async function createUser(body: User) {
  try {
    const user = await userModel.user.findOne({
      where: { email: body.email, isDeleted: false },
    });

    if (user) {
      return 'userAlreadyExist';
    } else {
      const mailDetails = {
        to: body.email,
        subject: 'Account created.',
        text: 'Your account has been successfully created.',
      };
      console.log(mailDetails);
      mailTransporter.sendMail(mailDetails);
      mailTransporter.sendMail(mailDetails, function (err) {
        if (err) {
          console.log('Error:Email not Sent', err);
        } else {
          console.log('Email sent successfully');
        }
      });

      const hashpw = await hashPassword(body.password);
      body.password = hashpw;

      // const password = await hashPassword(body.password)
      return await userModel.user.create(body);
    }
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}

// *****************************Get user service***********************************
async function getUsers(data) {
  try {
    return await userModel.user.findAll({
      where: { isDeleted: false },
      attributes: ['id', 'firstName', 'age', 'email', 'password', 'phoneNo'],
      offset: data.page ? (parseInt(data.page) - 1) * parseInt(data.limit) : 0,
      limit: data.limit ? parseInt(data.limit) : 5,
    });
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}

//****************************** get user by id service ***********************************
async function getUserById(params: UserGetAttribute) {
  try {
    const users = await userModel.user.findByPk(params.id);
    if (!users) {
      return 'notExist';
    } else {
      return users;
    }
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}
// *****************************Update user service*******************************
async function updateUser(params, body: UserUpdateAttribute) {
  try {
    const users = await userModel.user.findOne({
      where: {
        id: params.id,
      },
    });
    if (!users) {
      return 'notExist';
    } else {
      return await users.update(body);
    }
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
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
async function deleteUser(params: UserDeleteAttribute) {
  try {
    const users = await userModel.user.findOne({
      where: {
        id: params.id,
      },
    });
    if (!users) {
      return 'notExist';
    } else {
      const date = new Date();
      return await users.update({
        isDeleted: true,
        deletedAt: date,
        deletedBy: users.id,
      });
    }
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
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

async function changePasswordService(data, customerId: string) {
  try {
    const { oldPassword, newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      return 'newPassword!=ConfirmPassword';
    }
    const existingUser = await userModel.user.findByPk(customerId);
    if (!existingUser) {
      return 'userDoesNotExists';
    }
    console.log(existingUser);
    const isMatch = await comparePassword(oldPassword, existingUser.password);
    if (!isMatch) {
      return 'oldPasswordIncorrect';
    }
    const pass = await hashPassword(newPassword);
    existingUser.password = pass;
    await existingUser.update({ password: pass });

    return existingUser;
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}

async function resetPasswordService(data) {
  try {
    const { email, otp, newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      return 'newPassword!== confirmPassword';
    }

    const existingUser = await userModel.user.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return 'userDoesNotExists';
    }

    const originalOtp = await existingUser.otp;

    if (originalOtp !== otp) {
      return 'incorrectOtp';
    }

    const otpExipration: any = existingUser.otpExipration;

    if (otpExipration < new Date(Date.now())) {
      console.log(otpExipration, new Date(Date.now()));
      return 'otpExpired';
    }

    const hashedPassword = await hashPassword(newPassword);
    await existingUser.update({ otp: otp, password: hashedPassword, otpExipration: otpExipration });

    const mailDetails = {
      to: email,
      subject: 'Password Changed',
      text: 'Your account password updated successfully',
    };

    console.log(mailDetails);

    mailTransporter.sendMail(mailDetails, function (err) {
      if (err) {
        console.log('Error: Email not Sent', err);
      } else {
        console.log('Email sent successfully');
      }
    });

    return 'passwordUpdatedSuccessfully';
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}

async function resetPasswordEmailService(data) {
  try {
    const { email } = data;
    const existingUser = await userModel.user.findOne({
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
      to: existingUser?.email,
      subject: 'Request for password reset.',
      text: `You have received a one-time password (OTP) for updating your password. The otp is ${otp} and will expire in the next 10 minutes.`,
    };
    console.log(mailDetails);
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('Error:Email not Sent', err);
      } else {
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
  } catch (err) {
    logger.error(err);
    throw new Error(err.message);
  }
}

export default { createUser, updateUser, deleteUser, getUsers, getUserById, changePasswordService, handleUserRelatedData, resetPasswordService, resetPasswordEmailService };
