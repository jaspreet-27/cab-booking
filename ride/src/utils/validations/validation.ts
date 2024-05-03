import joi from 'joi'

 export const ride = joi.object({
  from: joi.string().optional(),
  to: joi.string().optional(),
  status: joi.string().optional(),
  date: joi.date().optional(),
  time: joi.date().optional(),
  driverId: joi.string().optional(),
  price : joi.number().optional(),
})


export const updateRide = joi.object({
  from: joi.string().optional(),
  to: joi.string().optional(),
  status: joi.string().optional(),
  date: joi.date().optional(),
  time: joi.date().optional(),
  driverId: joi.string().optional(),
  price : joi.number().optional(),
})




export const validateRequest = (schema) => {
  // eslint-disable-next-line consistent-return
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};
