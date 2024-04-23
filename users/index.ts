// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { Request, Response } from 'express';
import routes from './src/routes/user/userRoutes';
import { PORT } from './env';
import helmet from 'helmet';
import cors from 'cors';
// import {mailTransporter} from './src/email/email'

const app = express();
process.env.PORT || 8000;

app.use(express.json());


// Use Helmet middleware
app.use(helmet());

// Use CORS middleware
app.use(cors());
routes(app);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// const mailDetails = {
//   to: "jasprettykaur@gmail.com",
//   subject: 'Account created.',
//   text: 'Your account has been successfully created.',
// }
// console.log(mailDetails)
//  mailTransporter.sendMail(mailDetails)

// process.on('uncaughtException', err => {
//   console.error(err, 'Uncaught Exception thrown');
//   // process.exit(1);
// });
