export declare const message: {
    somethingWrong: string;
    tokenRequried: string;
    tokenExpired: string;
    login: string;
    validationError: string;
    invalidlogin: string;
    add: (labal: string) => string;
    fetch: (labal: string) => string;
    update: (labal: string) => string;
    delete: (labal: string) => string;
    notExist: (labal: string) => string;
    alreadyExist: (labal: string) => string;
    errorLog: (functionName: string, controllerName: string, err: any) => string;
};
export declare const statusCode: {
    success: number;
    badRequest: number;
    serverError: number;
    forbidden: number;
    notFound: number;
    notAllowed: number;
    tokenExpired: number;
    emailOrUserExist: number;
    wrongPassword: number;
    accountDeactivated: number;
    authTokenRequired: number;
    unauthorized: number;
};
