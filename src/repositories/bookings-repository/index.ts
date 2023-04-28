import { prisma } from '@/config';

function insertNewBooking(userId: number, roomId: number) {
  return prisma.booking.create({
    data: {
      userId,
      roomId,
    },
  });
}

function findAllBookingsWithRoomId(roomId: number) {
  return prisma.booking.count({
    where: {
      roomId,
    },
  });
}

export default {
  insertNewBooking,
  findAllBookingsWithRoomId,
};
