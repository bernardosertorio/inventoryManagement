import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';
import GetCategoryController from '../controllers/getCategoryController';

import ProductController from '../controllers/ProductController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productsRouter = Router();

const categoryController = new CategoryController();
const getCategoryController = new GetCategoryController();

const productController = new ProductController();

productsRouter.use(ensureAuthenticated);

// Category Routes

productsRouter.post('/category', categoryController.create);
productsRouter.get('/getcategory', getCategoryController.index);

// Product Routes

productsRouter.post('/category/product', productController.create);

export default productsRouter;
