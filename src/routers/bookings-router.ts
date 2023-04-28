import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { bookingSchema } from '@/schemas/bookings-schema';
import { insertBooking } from '@/controllers/bookings-controller';

const bookingsRouter = Router();

bookingsRouter.post('/', authenticateToken, validateBody(bookingSchema), insertBooking);

export { bookingsRouter };
