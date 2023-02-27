import ErrorHttp from '../../errors/errorHttp';
import { prisma } from '../../prisma';

export const readAnnouncementIdService = async (id: string) => {
  const announcement = await prisma.announcement.findUnique({
    where: {
      id: id,
    },
    include: {
      comments: {
        include: {
          user: true,
        },
      },
      images: true,
      user: true,
    },
  });

  if (!announcement) {
    throw new ErrorHttp('Announcement not found!', 404);
  }

  return announcement;
};
