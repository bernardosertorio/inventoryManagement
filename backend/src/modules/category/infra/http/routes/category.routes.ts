import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import GetCategoryController from '../controllers/getCategoryController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();
const getCategoryController = new GetCategoryController();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.get('/getcategory', getCategoryController.index);

export default categoriesRouter;
