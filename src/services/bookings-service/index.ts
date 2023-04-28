import { TicketStatus } from '@prisma/client';
import { forbiddenError, notFoundError } from '@/errors';
import bookingsRepository from '@/repositories/bookings-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import roomsRepository from '@/repositories/rooms-repository';

async function insertNewBooking(userId: number, roomId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();
  if (ticket.TicketType.isRemote || !ticket.TicketType.includesHotel || ticket.status === TicketStatus.RESERVED)
    throw forbiddenError();

  const room = await roomsRepository.getRoomById(roomId);
  if (!room) throw notFoundError();

  const numBookings = await bookingsRepository.findAllBookingsWithRoomId(roomId);
  if (numBookings >= room.capacity) throw forbiddenError();

  const newBooking = await bookingsRepository.insertNewBooking(userId, roomId);
  return { bookingId: newBooking.id };
}

export default {
  insertNewBooking,
};
