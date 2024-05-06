import { Request, Response } from 'express';
declare function createRide(req: Request, res: Response): Promise<void>;
declare function getRides(req: Request, res: Response): Promise<void>;
declare function updateUser(req: Request, res: Response): Promise<void>;
declare function deleteUser(req: Request, res: Response): Promise<void>;
declare const _default: {
    createRide: typeof createRide;
    getRides: typeof getRides;
    updateUser: typeof updateUser;
    deleteUser: typeof deleteUser;
};
export default _default;
