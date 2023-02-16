import { prisma } from '../../prisma';

export const profileService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      address: true,
    },
  });

  return user;
};
