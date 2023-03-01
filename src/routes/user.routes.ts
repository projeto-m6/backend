import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { requestResetPasswordController } from "../controllers/users/requestResetPassword.controller";
import { resetPasswordController } from "../controllers/users/resetPassword.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { isOwnUserMiddleware } from "../middlewares/isOwnUser.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAuthTokenPasswordMiddleware from "../middlewares/verifyAuthTokenPassword.middlewere";

const routes = Router();

export const userRoutes = () => {
  routes.post("", createUserController);
  routes.patch(
    "/:id",
    verifyAuthTokenMiddleware,
    isOwnUserMiddleware,
    updateUserController
  );
  routes.delete(
    "/:id",
    verifyAuthTokenMiddleware,
    isOwnUserMiddleware,
    updateUserController
  );
  routes.post("/request-password", requestResetPasswordController);
  routes.post(
    "/reset-password",
    verifyAuthTokenPasswordMiddleware,
    resetPasswordController
  );

  return routes;
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc2ODM3MjIsImV4cCI6MTY3Nzc3MDEyMn0.Fd-oAHlESH4-iw_jJskNFeeVCfSPocesOh6-2QGOHYg
