import { Model } from "sequelize";
import { Ride } from "../utils/interfaces/rideInterface";
import { Status } from "../utils/enums/rideEnum";
declare class ride extends Model<Ride> implements Ride {
    id?: string;
    from: string;
    to: string;
    time: Date;
    driverId?: string;
    price: number;
    date: Date;
    status?: Status;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    deletedBy?: string;
    isDeleted?: boolean;
}
declare const _default: {
    ride: typeof ride;
};
export default _default;
