import logger from '../utils/logger/logger'
import { hashPassword } from '../utils/comman/comman'
import userModel from '../model/user/userSchema'
import {mailTransporter} from '../email/email'
import {User,UserUpdateAttribute,UserDeleteAttribute,UserGetAttribute} from "../utils/interfaces/userInterface"



// *****************************Create user service*******************************

async function createUser(body:User) {
  try {
    const user = await userModel.user.findOne({
      where: { email: body.email, isDeleted: false },
    })

    if (user) {
      return 'userAlreadyExist'
    } else {

      const mailDetails = {
        to: body.email,
        subject: 'Account created.',
        text: 'Your account has been successfully created.',
      }
      console.log(mailDetails)
       mailTransporter.sendMail(mailDetails)
      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log('Error:Email not Sent', err)
        } else {
          console.log('Email sent successfully');
        }
      });


    const hashpw = await hashPassword(body.password)
    body.password = hashpw

      // const password = await hashPassword(body.password)
      return await userModel.user.create(body)
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
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
    })
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}

//****************************** get user by id service ***********************************
async function getUserById(params:UserGetAttribute) {
  try {
    const users = await userModel.user.findByPk(params.id)
    if (!users) {
      return 'notExist'
    } else {
      return users
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}
// *****************************Update user service*******************************
async function updateUser(params, body:UserUpdateAttribute) {
  try {
    const users = await userModel.user.findOne({
      where: {
        id: params.id,
      },
    })
    if (!users) {
      return 'notExist'
    } else {
      return await users.update(body)
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}
// *****************************Delete user service*******************************
async function deleteUser(params:UserDeleteAttribute) {
  try {
    const users = await userModel.user.findOne({
      where: {
        id: params.id,
      },
    })
    if (!users) {
      return 'notExist'
    } else {
      const date = new Date()
      return await users.update({
        isDeleted: true,
        deletedAt: date,
        deletedBy: users.id,
      })
    }
  } catch (err) {
    logger.error(err)
    throw new Error(err.message)
  }
}

export default { createUser, updateUser, deleteUser, getUsers, getUserById }
