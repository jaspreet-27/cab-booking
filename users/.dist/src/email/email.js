"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTransporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.mailTransporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'mailto:jaspreetkaurwins@gmail.com',
        pass: 'carq velv hjjl kdpv',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW1haWwvZW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQW9DO0FBQ3ZCLFFBQUEsZUFBZSxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDO0lBQ3hELE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsSUFBSSxFQUFFLHFCQUFxQjtLQUM1QjtDQUNGLENBQUMsQ0FBQyJ9