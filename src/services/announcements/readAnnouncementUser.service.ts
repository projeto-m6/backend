import { prisma } from "../../prisma";

export const readAnnouncementUserService = async (id: string) => {
  const announcements = await prisma.announcement.findMany({
    where: {
      user_id: id,
    },
    include: {
      images: true,
    },
  });

  return announcements;
};
