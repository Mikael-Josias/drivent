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

function alterBookedRoom(bookingId: number, roomId: number) {
  return prisma.booking.update({
    select: {
      id: true,
    },
    data: {
      roomId,
    },
    where: {
      id: bookingId,
    },
  });
}

export default {
  insertNewBooking,
  findAllBookingsWithRoomId,
  findBookingRoomDataByUserId,
  alterBookedRoom,
};
