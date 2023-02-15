import { prisma } from "../../prisma";

export const readAnnouncementIdService = async (id: string) => {
  const announcements = await prisma.announcement.findMany({
    where: {
      id: id,
    },
    include: {
      images: true,
    },
  });

  return announcements;
};
