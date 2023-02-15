import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcements/createAnnouncement.service";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  const { id } = req.user;

  const announcement = await createAnnouncementService(data, id);

  return res.status(201).json(announcement);
};
