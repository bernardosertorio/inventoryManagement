import { Router } from 'express';
import CategoriesController from '../controllers/CategoriesController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.post('/', ensureAuthenticated, categoriesController.create);

export default categoriesRouter;
