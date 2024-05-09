import express from 'express';
import routes from './src/routes/user/userRoutes';
import { PORT } from './env';
import helmet from 'helmet';
import cors from 'cors';
import { subscribeAll } from './src/redis';
subscribeAll();
const app = express();
app.use(express.json());
// Use Helmet middleware
app.use(helmet());
// Use CORS middleware
app.use(cors());
// Mount routes
routes(app);
// app.use('v1/user', routes);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

