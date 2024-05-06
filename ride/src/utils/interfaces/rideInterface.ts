import { Status } from "../enums/rideEnum";

export interface Ride {
    id?: string;
    from: string;
    to: string;
    time: Date;
    date: Date;
    driverId?: string;
    price: number;
    status?: Status;
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
    deletedBy?: string
    isDeleted?: boolean
}


export interface RideUpdateAttribute {
    id?: string;
    from?: string;
    to?: string;
    time?: Date;
    date?: Date;
    driverId?: string;
    price?: number;
    status?: Status;
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
    deletedBy?: string
    isDeleted?: boolean
}


export interface RideDelelteAttribute{
    id?: string;
}

export interface RideGetAttribute{
    id?: string;

}
