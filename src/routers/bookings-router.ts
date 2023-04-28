import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { bookingSchema } from '@/schemas';
import { alterBookedRoom, getBooking, insertBooking } from '@/controllers';

const bookingsRouter = Router();

bookingsRouter.post('/', authenticateToken, validateBody(bookingSchema), insertBooking);
bookingsRouter.get('/', authenticateToken, getBooking);
bookingsRouter.put('/:bookingId', authenticateToken, validateBody(bookingSchema), alterBookedRoom);

export { bookingsRouter };
