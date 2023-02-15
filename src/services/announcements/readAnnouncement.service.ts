import { prisma } from "../../prisma";

export const readAnnouncementService = async () => {
  const announcements = await prisma.announcement.findMany({
    include: {
      images: true,
    },
  });

  return announcements;
};
