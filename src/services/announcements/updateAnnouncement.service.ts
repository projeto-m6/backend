import { prisma } from "../../prisma";

export const updateAnnouncementService = async (data: any, id: string) => {
  const { images, ...announcementData } = data;

  const announcement_data: any = await prisma.announcement.findFirst({
    where: { id: id },
    include: {
      images: true,
    },
  });

  const image_data = announcement_data.images;

  const images_updated: any = handleAnnouncementDataAndImages(
    images,
    image_data
  );

  const announcement = await prisma.announcement.update({
    data: {
      ...announcementData,
      images: {
        updateMany: (images_updated ?? [])
          .slice(0, 3)
          .map((image: any, index: any) => ({
            where: { id: images_updated[index].id },
            data: { image_url: images![index]?.image_url },
          })),
      },
    },
    where: { id },
    include: { images: true },
  });

  return announcement;
};

function handleAnnouncementDataAndImages(images: any, image_data: any) {
  const images_updated: Array<{
    id: string;
    image_url: string;
    announcement_id: string;
  }> = [];

  let x = 0;
  for (let y = 0; y <= 2; y++) {
    let image = image_data[y];
    for (let i = 0; i <= 2; i++) {
      if (i == x) {
        const updated = {
          id: image.id,
          image_url: images![i]?.image_url,
          announcement_id: image.announcement_id,
        };
        images_updated.push(updated);
      }
    }
    x++;
  }

  return images_updated;
}
