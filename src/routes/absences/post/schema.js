import Joi from 'joi';

import constants from '../../../constants/index.js';

const absence = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .description('Email'),
  time: Joi.date()
    .iso()
    .description('Phone number'),
  status: Joi.valid(...Object.values(constants.ABSENCE_STATUS))
    .description('status'),
});

const postAbsence = { body: absence };

export default postAbsence;
