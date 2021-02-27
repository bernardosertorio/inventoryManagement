import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import GetCategoriesController from '../controllers';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();
const getCategoriesController = new GetCategoriesController();

categoriesRouter.post('/', ensureAuthenticated, categoriesController.create);
categoriesRouter.get('/categories', getCategoriesController.index);

export default categoriesRouter;
