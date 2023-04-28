import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { bookingSchema } from '@/schemas';
import { getBooking, insertBooking } from '@/controllers';

const bookingsRouter = Router();

bookingsRouter.post('/', authenticateToken, validateBody(bookingSchema), insertBooking);
bookingsRouter.get('/', authenticateToken, getBooking);

export { bookingsRouter };
