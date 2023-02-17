import { prisma } from '../../prisma';

export const profileService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      announcements: true,
      address: true,
    },
  });

  const { password, ...rest } = user!;

  return rest;
};
