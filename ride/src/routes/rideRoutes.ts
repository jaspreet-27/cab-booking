import { Express } from 'express'
import rideController from '../controllers/rideController'
// import validationMiddleware from '../../validations/validation'

const rideRoute = (app: Express) => {
  app.post('/', rideController.createRide)
//   app.get('/', userController.getUsers)
//   app.get('/:id', userController.getUser)
//   app.put('/:id', validationMiddleware, userController.updateUser)
//   app.delete('/:id', userController.deleteUser)
}
export default rideRoute