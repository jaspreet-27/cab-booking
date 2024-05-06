"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rideController_1 = __importDefault(require("../controllers/rideController"));
const validation_1 = require("../utils/validations/validation");
const rideRoute = (app) => {
    app.post('/', (0, validation_1.validateRequest)(validation_1.ride), rideController_1.default.createRide);
    app.get('/', rideController_1.default.getRides);
    app.put('/:id', (0, validation_1.validateRequest)(validation_1.updateRide), rideController_1.default.updateUser);
    app.delete('/:id', rideController_1.default.deleteUser);
};
exports.default = rideRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlkZVJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmlkZVJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG1GQUEwRDtBQUMxRCxnRUFBZ0Y7QUFFaEYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFZLEVBQUUsRUFBRTtJQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFBLDRCQUFlLEVBQUMsaUJBQUksQ0FBQyxFQUFDLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsd0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFBLDRCQUFlLEVBQUMsdUJBQVUsQ0FBQyxFQUFFLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQUE7QUFDRCxrQkFBZSxTQUFTLENBQUEifQ==