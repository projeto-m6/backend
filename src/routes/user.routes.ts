import { Router } from 'express';
import { createUserController } from '../controllers/users/createUser.controller';
import { updateUserController } from '../controllers/users/updateUser.controller';
import isOwnerResource from '../middlewares/isOwnerResource.middleware';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';

const routes = Router();

export const userRoutes = () => {
  routes.post('', createUserController);
  routes.patch('/:id',verifyAuthTokenMiddleware,isOwnerResource, updateUserController)

  return routes;
};
