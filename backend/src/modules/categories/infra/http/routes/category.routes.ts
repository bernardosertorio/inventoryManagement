import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import GetCategoryController from '../controllers/getCategoryController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();
const getCategoryController = new GetCategoryController();

categoriesRouter.post('/', ensureAuthenticated, categoriesController.create);
categoriesRouter.get('/category', getCategoryController.index);

export default categoriesRouter;
