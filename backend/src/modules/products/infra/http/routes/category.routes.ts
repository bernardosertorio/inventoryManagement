import { Router } from 'express';

import CategoryController from '../controllers/Category/CategoryController';
import GetCategoryController from '../controllers/Category/GetCategoryController';
import PutCategoryController from '../controllers/Category/PutCategoryController';
import DeleteCategoryController from '../controllers/Category/DeleteCategoryController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const categoryRouter = Router();

const categoryController = new CategoryController();
const getCategoryController = new GetCategoryController();
const putCategoryController = new PutCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRouter.use(ensureAuthenticated);

categoryRouter.post('/category', categoryController.create);
categoryRouter.get('/category/:category_id', getCategoryController.index);
categoryRouter.put('/category/edit/:category_id', putCategoryController.put);
categoryRouter.delete(
  '/category/delete/:category_id',
  deleteCategoryController.delete,
);

export default categoryRouter;
