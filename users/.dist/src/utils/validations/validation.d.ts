import joi from 'joi';
export declare const user: joi.ObjectSchema<any>;
export declare const login: joi.ObjectSchema<any>;
export declare const updateUser: joi.ObjectSchema<any>;
export declare const updatePassword: joi.ObjectSchema<any>;
export declare const resetPassword: joi.ObjectSchema<any>;
export declare const validateRequest: (schema: any) => (req: any, res: any, next: any) => any;
