import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  // 'Cab Booking',
  // 'root',
  // '',
  process.env.DATABASE,
  process.env.dbUsername,
  process.env.bPassword,

  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  },
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database: ', error)
  })

export default sequelize
