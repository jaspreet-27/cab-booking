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
exports.subscribeAll = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const userService_1 = __importDefault(require("../services/userService"));
// const publisher = new Redis();
const subscriber = new ioredis_1.default();
function subscribeAll() {
    console.log('in_________________________');
    subscriber.subscribe('rides_channel');
    //subscriber.subscribe('users_channel');
    subscriber.on('message', (channel, message) => __awaiter(this, void 0, void 0, function* () {
        console.log(`Received ride-related data from ${channel}:`, JSON.parse(message));
        yield userService_1.default.handleUserRelatedData(channel, message);
    }));
}
exports.subscribeAll = subscribeAll;
//export default subscribeAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVkaXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQTRCO0FBQzVCLDBFQUFrRDtBQUNsRCxpQ0FBaUM7QUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBSyxFQUFFLENBQUM7QUFFL0IsU0FBZ0IsWUFBWTtJQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0Qyx3Q0FBd0M7SUFFeEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBTyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0scUJBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFHNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUM7QUFaRCxvQ0FZQztBQUtELDhCQUE4QiJ9