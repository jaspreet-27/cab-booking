export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    phoneNo: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    deletedBy?: string;
    isDeleted?: boolean;
    otp?: number;
    otpExipration?: Date;
}
export interface UserUpdateAttribute {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    email?: string;
    password?: string;
    phoneNo?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    deletedBy?: string;
    isDeleted?: boolean;
}
export interface UserDeleteAttribute {
    id?: string;
}
export interface UserGetAttribute {
    id?: string;
}
