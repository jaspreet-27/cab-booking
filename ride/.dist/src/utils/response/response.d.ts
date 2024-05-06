export declare const successResponse: (statusCode: number, data: {}, message?: string) => {
    statusCode: number;
    data: {};
    message: string;
};
export declare const failResponse: (statusCode: number, errorMessage: string, message?: string) => {
    statusCode: number;
    errorMessage: string;
    message: string;
};
