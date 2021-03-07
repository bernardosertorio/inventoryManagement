import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import CategoryController from '../controllers/CategoryController';

const categoryController = new CategoryController();

const categoryRoutes = Router();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.post('/', categoryController.create);

categoryRoutes.get('/', categoryController.index);

categoryRoutes.put('/:code', categoryController.update);

categoryRoutes.delete('/:code', categoryController.delete);

export default categoryRoutes;
