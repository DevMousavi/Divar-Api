import { Router } from 'express';
import categoryController from './category.controller';

const route: Router = Router();

route.post('/create', categoryController.create);

const categoryRoutes: Router = route;
export default categoryRoutes;
