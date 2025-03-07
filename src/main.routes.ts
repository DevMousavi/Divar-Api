import { Router } from 'express';
import categoryRoutes from './modules/category/category.routes';

const route: Router = Router();

route.use('/category', categoryRoutes);

const mainRoutes: Router = route;
export default mainRoutes;
