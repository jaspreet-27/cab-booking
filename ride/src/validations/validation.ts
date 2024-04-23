import joi from 'joi'

const ride = joi.object({
  firstName: joi.string().optional(),
  lastName: joi.string().optional(),
  age: joi.string().optional(),
  email: joi.string().email().optional(),
  password: joi.string().optional(),
  phoneNo: joi.string().optional(),
})

const validationMiddleware = async (req: any, res: any, next: any) => {
  const option = {
    abortEarly: false,
    allowUnknown: false,
  }

  if (req.body.schema == 'Ride') {
    var { error } = ride.validate(req.body, option)
  }
  if (error) {
    res.status(400).json({ validationError: error.details[0].message })
  } else {
    next()
  }
}

export default validationMiddleware
