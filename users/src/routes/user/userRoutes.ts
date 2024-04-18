import { Express } from 'express'
import userController from '../../controllers/user/userController'
import validationMiddleware from '../../validations/validation'

const userRoute = (app: Express) => {
  app.post('/createUser', validationMiddleware, userController.createUser)
  app.get('/', userController.getUsers)
  app.get('/:id', userController.getUser)
  app.put('/:id', validationMiddleware, userController.updateUser)
  app.delete('/:id', userController.deleteUser)
}
export default userRoute
