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
exports.generateToken = exports.mailTransporter = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 10;
function hashPassword(plainPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSaltSync(saltRounds);
        return yield bcrypt_1.default.hashSync(plainPassword, salt);
    });
}
exports.hashPassword = hashPassword;
function comparePassword(plainPassword, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compareSync(plainPassword, hash);
    });
}
exports.comparePassword = comparePassword;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.mailTransporter = nodemailer_1.default.createTransport({
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
function generateToken(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const secret = process.env.TOKEN_KEY;
        if (!secret) {
            throw new Error('JWT secret is not defined');
        }
        const token = yield jsonwebtoken_1.default.sign(data, secret, {
            expiresIn: 10000,
        });
        return token;
    });
}
exports.generateToken = generateToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2NvbW1hbi9jb21tYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLGdFQUErQjtBQUMvQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFdEIsU0FBc0IsWUFBWSxDQUFDLGFBQXFCOztRQUN0RCxNQUFNLElBQUksR0FBRyxNQUFNLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sTUFBTSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUFBO0FBSEQsb0NBR0M7QUFFRCxTQUFzQixlQUFlLENBQUMsYUFBcUIsRUFBRSxJQUFZOztRQUN2RSxPQUFPLE1BQU0sZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FBQTtBQUZELDBDQUVDO0FBRUQsNERBQW9DO0FBQ3ZCLFFBQUEsZUFBZSxHQUFHLG9CQUFVLENBQUMsZUFBZSxDQUFDO0lBQ3hELE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsSUFBSSxFQUFFLHFCQUFxQjtLQUM1QjtDQUNGLENBQUMsQ0FBQztBQUdILGdDQUFnQztBQUNoQyxxQ0FBcUM7QUFFckMsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUN0QyxNQUFNO0FBRU4sZ0NBQWdDO0FBRWhDLDRDQUE0QztBQUM1QyxxQkFBcUI7QUFDckIsc0RBQXNEO0FBQ3RELFFBQVE7QUFFUix3RUFBd0U7QUFDeEUsMEJBQTBCO0FBQzFCLFVBQVU7QUFDVixvQkFBb0I7QUFDcEIsTUFBTTtBQUNOLElBQUk7QUFFSixTQUFlLGFBQWEsQ0FBQyxJQUFTOztRQUNwQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFXLE1BQU0sc0JBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUNqRCxTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FBQTtBQUVRLHNDQUFhIn0=