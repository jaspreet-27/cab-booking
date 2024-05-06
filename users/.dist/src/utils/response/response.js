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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvcmVzcG9uc2UvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxlQUFlLEdBQUcsQ0FBQyxVQUFrQixFQUFFLElBQVEsRUFBRSxPQUFPLEdBQUcsU0FBUyxFQUFFLEVBQUU7SUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRlcsUUFBQSxlQUFlLG1CQUUxQjtBQUVLLE1BQU0sWUFBWSxHQUFHLENBQUMsVUFBa0IsRUFBRSxZQUFvQixFQUFFLE9BQU8sR0FBRyxNQUFNLEVBQUUsRUFBRTtJQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFGVyxRQUFBLFlBQVksZ0JBRXZCIn0=