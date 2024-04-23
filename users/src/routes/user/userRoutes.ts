import { Express } from 'express';
import userController from '../../controllers/user/userController';
import validationMiddleware from '../../validations/validation';

const userRoute = (app: Express) => {
  app.post('/', validationMiddleware, userController.createUser);
  app.get('/', userController.getUsers);
  app.get('/:id', userController.getUser);
  app.put('/:id', validationMiddleware, userController.updateUser);
  app.delete('/:id', userController.deleteUser);
  app.put('/resetPassword',userController.resetPassword);
  app.put('/updatePassword/:id',userController.changePassword);
  app.post('/resetEmail', userController.resetPasswordEmail);
};
export default userRoute;
