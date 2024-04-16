
import express, { Request, Response } from "express";
import  routes  from "./src/routes/user/userRoutes"
import {PORT } from "./env";


const app = express()
process.env.PORT || 8000;


app.use(express.json()); 
routes(app)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


// process.on('uncaughtException', err => {
//   console.error(err, 'Uncaught Exception thrown');
//   // process.exit(1);
// });
