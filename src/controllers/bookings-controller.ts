import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import bookingsService from '@/services/bookings-service';

export async function insertBooking(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;
  const { roomId } = req.body as Record<string, number>;
  try {
    const booking = await bookingsService.insertNewBooking(userId, roomId);
    res.send(booking);
  } catch (error) {
    next(error);
  }
}
