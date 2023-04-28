import Joi from 'joi';

export const bookingSchema = Joi.object({
  roomId: Joi.number().positive().integer().required(),
});
