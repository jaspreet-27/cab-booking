import nodemailer from 'nodemailer';
export const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailto:jaspreetkaurwins@gmail.com',
    pass: 'carq velv hjjl kdpv',
  },
});
