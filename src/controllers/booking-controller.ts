import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import bookingsService from '@/services/booking-service';

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

export async function getBooking(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const userId = req.userId;
  try {
    const booking = await bookingsService.getUserBooking(userId);
    res.send(booking);
  } catch (error) {
    next(error);
  }
}

export async function alterBookedRoom(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { roomId } = req.body as Record<string, number>;
  const bookingId = Number(req.params.bookingId) || 0;
  try {
    await bookingsService.alterRoomBooked(bookingId, roomId);
    res.send({ bookingId });
  } catch (error) {
    next(error);
  }
}
