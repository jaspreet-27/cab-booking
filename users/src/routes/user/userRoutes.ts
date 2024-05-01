import { Express } from 'express';
import userController from '../../controllers/user/userController';
import {user, updateUser, updatePassword,resetPassword,validateRequest} from '../../utils/validations/validation';

const userRoute = (app: Express) => {
  app.post('/', validateRequest(user), userController.createUser);
  app.get('/', userController.getUsers);
  app.get('/:id', userController.getUser);
  app.put('/:id', validateRequest(updateUser), userController.updateUser);
  app.delete('/:id', userController.deleteUser);
  app.put('/resetPassword',validateRequest(resetPassword), userController.resetPassword);
  app.put('/updatePassword/:id',validateRequest(updatePassword), userController.changePassword);
  app.post('/resetEmail', userController.resetPasswordEmail);
};
export default userRoute;
