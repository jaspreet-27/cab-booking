"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failResponse = exports.successResponse = void 0;
const successResponse = (statusCode, data, message = 'Success') => {
    return { statusCode, data, message };
};
exports.successResponse = successResponse;
const failResponse = (statusCode, errorMessage, message = 'Fail') => {
    return { statusCode, errorMessage, message };
};
exports.failResponse = failResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvcmVzcG9uc2UvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxlQUFlLEdBQUcsQ0FDM0IsVUFBa0IsRUFDbEIsSUFBUSxFQUNSLE9BQU8sR0FBRyxTQUFTLEVBQ25CLEVBQUU7SUFDRixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQTtBQUN0QyxDQUFDLENBQUE7QUFOVSxRQUFBLGVBQWUsbUJBTXpCO0FBRU0sTUFBTSxZQUFZLEdBQUcsQ0FDMUIsVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsT0FBTyxHQUFHLE1BQU0sRUFDaEIsRUFBRTtJQUNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFBO0FBQzlDLENBQUMsQ0FBQTtBQU5ZLFFBQUEsWUFBWSxnQkFNeEIifQ==