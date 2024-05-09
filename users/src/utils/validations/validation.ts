import joi from 'joi';

export const user = joi.object({
  firstName: joi.string().optional().min(3).max(35),
  lastName: joi.string().required().min(3).max(35),
  age: joi.string().optional(),
  password: joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    'password'),
  phoneNo: joi.number().optional(),
  email: joi.string().required()
});

export const login = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const updateUser = joi.object({
  firstName: joi.string().optional().min(3).max(35),
  lastName: joi.string().optional().min(3).max(35),
  age: joi.string().optional(),
  phoneNo: joi.string().optional().length(10).pattern(/[6-9]{1}[0-9]{9}/),
  email: joi.string().required()
});

export const updatePassword = joi.object({
  oldPassword: joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,'password'),
  newPassword:     joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,'password'),
  confirmPassword: joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,'password'),
  email: joi.string().email().required(),

});

export const resetPassword = joi.object({
  newPassword:     joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,'password'),
  confirmPassword: joi.string().required().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,'password'),
  email: joi.string().email().required(),

});

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


