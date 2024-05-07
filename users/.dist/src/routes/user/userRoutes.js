"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../../controllers/user/userController"));
const validation_1 = require("../../utils/validations/validation");
const userRoute = (app) => {
    app.post('/', (0, validation_1.validateRequest)(validation_1.user), userController_1.default.createUser);
    app.get('/', userController_1.default.getUsers);
    app.get('/:id', userController_1.default.getUser);
    app.post('/login', userController_1.default.loginCustomer);
    app.put('/:id', (0, validation_1.validateRequest)(validation_1.updateUser), userController_1.default.updateUser);
    app.delete('/:id', userController_1.default.deleteUser);
    app.put('/resetPassword', (0, validation_1.validateRequest)(validation_1.resetPassword), userController_1.default.resetPassword);
    app.put('/updatePassword/:id', (0, validation_1.validateRequest)(validation_1.updatePassword), userController_1.default.changePassword);
    app.post('/resetEmail', userController_1.default.resetPasswordEmail);
};
exports.default = userRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci91c2VyUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMkZBQW1FO0FBQ25FLG1FQUFrSDtBQUVsSCxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQVksRUFBRSxFQUFFO0lBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUEsNEJBQWUsRUFBQyxpQkFBSSxDQUFDLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHdCQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsd0JBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFBLDRCQUFlLEVBQUMsdUJBQVUsQ0FBQyxFQUFFLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLElBQUEsNEJBQWUsRUFBQywwQkFBYSxDQUFDLEVBQUUsd0JBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLElBQUEsNEJBQWUsRUFBQywyQkFBYyxDQUFDLEVBQUUsd0JBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSx3QkFBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBQ0Ysa0JBQWUsU0FBUyxDQUFDIn0=