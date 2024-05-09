import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const saltRounds = 10;

export async function hashPassword(plainPassword: string) {
  const salt = await bcrypt.genSaltSync(saltRounds);
  return await bcrypt.hashSync(plainPassword, salt);
}

export async function comparePassword(plainPassword: string, hash: string) {
  return await bcrypt.compareSync(plainPassword, hash);
}

import nodemailer from 'nodemailer';
export const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailto:jaspreetkaurwins@gmail.com',
    pass: 'carq velv hjjl kdpv',
  },
});


// export class CommonFunction {
//   private jwtInstance: typeof jwt;

//   constructor(jwtInstance: typeof jwt) {
//     this.jwtInstance = jwtInstance;
//   }

//   async generateToken(data) {

//     const secret = process.env.TOKEN_KEY;
//     if (!secret) {
//       throw new Error('JWT secret is not defined');
//     }

//     const token: string = await this.jwtInstance.sign(data, secret, {
//       expiresIn: 10000,
//     });
//     return token;
//   }
// }

async function generateToken(data: any): Promise<string> {
  const secret = process.env.TOKEN_KEY;
  if (!secret) {
    throw new Error('JWT secret is not defined');
  }

  const token: string = await jwt.sign(data, secret, {
    expiresIn: 10000,
  });
  return token;
}

export { generateToken };