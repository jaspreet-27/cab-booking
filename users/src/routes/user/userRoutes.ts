import {Express} from "express"
import userController from "../../controllers/user/userController";
import validationMiddleware from "../../validations/validation";

const userRoute = (app :Express) => {

    app.post('/createUser',validationMiddleware,userController.createUser );

 }
 export default userRoute;