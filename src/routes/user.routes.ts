import { Router } from 'express';
import { createUserController } from '../controllers/users/createUser.controller';

const routes = Router();

export const userRoutes = () => {
  routes.post('', createUserController);

  return routes;
};
