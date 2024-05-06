"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCode = exports.message = void 0;
exports.message = {
    somethingWrong: 'Something went wrong',
    tokenRequried: 'Auth token is requried.',
    tokenExpired: 'Session expired, please login again.',
    login: 'Login successfully',
    validationError: 'Validation error. Please check your params and try again.',
    invalidlogin: 'Invalid login credentials. Please check and try again.',
    add: (labal) => {
        return `${labal} added successfully.`;
    },
    fetch: (labal) => {
        return `${labal} fetched successfully.`;
    },
    update: (labal) => {
        return `${labal} updated successfully.`;
    },
    delete: (labal) => {
        return `${labal} deleted successfully.`;
    },
    notExist: (labal) => {
        return `${labal} not exist.`;
    },
    alreadyExist: (labal) => {
        return `${labal} already exist.`;
    },
    errorLog: (functionName, controllerName, err) => {
        return `${functionName} ${controllerName} Error @ ${err}`;
    },
};
exports.statusCode = {
    success: 200,
    badRequest: 400,
    serverError: 501,
    forbidden: 203,
    notFound: 204,
    notAllowed: 205,
    tokenExpired: 401,
    emailOrUserExist: 207,
    wrongPassword: 208,
    accountDeactivated: 209,
    authTokenRequired: 499,
    unauthorized: 403,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RyYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL3Jlc3BvbnNlL2NvbnN0cmFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE9BQU8sR0FBRztJQUNyQixjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsWUFBWSxFQUFFLHNDQUFzQztJQUNwRCxLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLGVBQWUsRUFBRSwyREFBMkQ7SUFFNUUsWUFBWSxFQUFFLHdEQUF3RDtJQUN0RSxHQUFHLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUNyQixPQUFPLEdBQUcsS0FBSyxzQkFBc0IsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsS0FBSyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDdkIsT0FBTyxHQUFHLEtBQUssd0JBQXdCLENBQUM7SUFDMUMsQ0FBQztJQUNELE1BQU0sRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQ3hCLE9BQU8sR0FBRyxLQUFLLHdCQUF3QixDQUFDO0lBQzFDLENBQUM7SUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUN4QixPQUFPLEdBQUcsS0FBSyx3QkFBd0IsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsUUFBUSxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxHQUFHLEtBQUssYUFBYSxDQUFDO0lBQy9CLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUM5QixPQUFPLEdBQUcsS0FBSyxpQkFBaUIsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsUUFBUSxFQUFFLENBQUMsWUFBb0IsRUFBRSxjQUFzQixFQUFFLEdBQVEsRUFBRSxFQUFFO1FBQ25FLE9BQU8sR0FBRyxZQUFZLElBQUksY0FBYyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUc7SUFDeEIsT0FBTyxFQUFFLEdBQUc7SUFDWixVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFNBQVMsRUFBRSxHQUFHO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixVQUFVLEVBQUUsR0FBRztJQUNmLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLFlBQVksRUFBRSxHQUFHO0NBQ2xCLENBQUMifQ==