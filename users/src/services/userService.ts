import logger from "../utils/logger/logger";
import { hashPassword,comparePassword } from "../utils/comman/comman";
import userModel from "../model/user/userSchema"
// async function findUser(req: any, res: any) {
//   try {
//     const { email }: any = req.body;
//     const user: any = await userModel.user.findOne({
//       where: {
//         email: email
//       }
//     });
//     if (user) {
//       return user; 
//     }
//     return null;   
//   } catch (error) {
//     throw error;
//   }
// };
// async function userCreate(req: any, res: any) {
//   try {
//     const { password }: any = req.body;
//     const saltRounds: number = 10;
//     const hashedPassword: string = await bcrypt.hash(password, saltRounds);
//     req.body.password = hashedPassword

//     const neWUser: any = await (req.body);
//     return neWUser;
//   } catch (error) {
//     throw error;
//   }
// };




async function createUser(body: any) {
  try {
    const user = await userModel.user.findOne({ where: { email: body.email } })

    if (user) {
      return 'userAlreadyExist'
    } else {
      const password = await hashPassword(body.password)
      return await userModel.user.create(body)
        // firstName: body.name,
        // age: body.age,
        // email: body.email,
        // password,
      // })
    }
  } catch (err: any) {
    logger.error(err)
    throw new Error(err.message)
  }
}



export default{createUser}