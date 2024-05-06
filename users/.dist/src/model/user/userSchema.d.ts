import { Model } from 'sequelize';
import { User } from '../../utils/interfaces/userInterface';
declare class user extends Model<User> implements User {
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
declare const _default: {
    user: typeof user;
};
export default _default;
