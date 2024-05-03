import { Express } from 'express'
import rideController from '../controllers/rideController'
import {validateRequest,ride,updateRide} from '../utils/validations/validation';

const rideRoute = (app: Express) => {
  app.post('/', validateRequest(ride),rideController.createRide)
  app.get('/', rideController.getRides)
  app.put('/:id',validateRequest(updateRide), rideController.updateUser)
  app.delete('/:id', rideController.deleteUser)
}
export default rideRoute
