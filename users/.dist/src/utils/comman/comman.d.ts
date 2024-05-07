export declare function hashPassword(plainPassword: string): Promise<any>;
export declare function comparePassword(plainPassword: string, hash: string): Promise<any>;
import nodemailer from 'nodemailer';
export declare const mailTransporter: nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
declare function generateToken(data: any): Promise<string>;
export { generateToken };
