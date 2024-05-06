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
exports.mailTransporter = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2NvbW1hbi9jb21tYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUV0QixTQUFzQixZQUFZLENBQUMsYUFBcUI7O1FBQ3RELE1BQU0sSUFBSSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLGdCQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQUE7QUFIRCxvQ0FHQztBQUVELFNBQXNCLGVBQWUsQ0FBQyxhQUFxQixFQUFFLElBQVk7O1FBQ3ZFLE9BQU8sTUFBTSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUFBO0FBRkQsMENBRUM7QUFFRCw0REFBb0M7QUFDdkIsUUFBQSxlQUFlLEdBQUcsb0JBQVUsQ0FBQyxlQUFlLENBQUM7SUFDeEQsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxJQUFJLEVBQUUscUJBQXFCO0tBQzVCO0NBQ0YsQ0FBQyxDQUFDIn0=