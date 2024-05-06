"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./src/routes/user/userRoutes"));
const env_1 = require("./env");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const redis_1 = require("./src/redis");
(0, redis_1.subscribeAll)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Use Helmet middleware
app.use((0, helmet_1.default)());
// Use CORS middleware
app.use((0, cors_1.default)());
// Mount routes
// routes(app);
app.use('v1/user', userRoutes_1.default);
app.listen(env_1.PORT, () => {
    console.log(`Server is running at http://localhost:${env_1.PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qiw4RUFBa0Q7QUFDbEQsK0JBQTZCO0FBQzdCLG9EQUE0QjtBQUM1QixnREFBd0I7QUFDeEIsdUNBQTJDO0FBQzNDLElBQUEsb0JBQVksR0FBRSxDQUFDO0FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsd0JBQXdCO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsQ0FBQztBQUNsQixzQkFBc0I7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsZUFBZTtBQUNmLGVBQWU7QUFDZixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxvQkFBTSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLFVBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUMifQ==