import joi from 'joi';
export declare const ride: joi.ObjectSchema<any>;
export declare const updateRide: joi.ObjectSchema<any>;
export declare const validateRequest: (schema: any) => (req: any, res: any, next: any) => any;
