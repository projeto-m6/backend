import { Express } from "express";
import { announcementRoutes } from "./announcement.routes";
import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/login", loginRoutes());
  app.use("/announcements", announcementRoutes());
  app.use("/users", userRoutes());
};
