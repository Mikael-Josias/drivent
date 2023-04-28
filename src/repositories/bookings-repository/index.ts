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

function findBookingRoomDataByUserId(userId: number) {
  return prisma.booking.findFirst({
    select: {
      id: true,
      Room: true,
    },
    where: {
      userId,
    },
  });
}

export default {
  insertNewBooking,
  findAllBookingsWithRoomId,
  findBookingRoomDataByUserId,
};
