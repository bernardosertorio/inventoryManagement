import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';
import GetCategoryController from '../controllers/getCategoryController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoryRouter = Router();
const categoryController = new CategoryController();
const getCategoryController = new GetCategoryController();

categoryRouter.use(ensureAuthenticated);

categoryRouter.post('/', categoryController.create);
categoryRouter.get('/getcategory', getCategoryController.index);

export default categoryRouter;
