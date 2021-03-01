import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';
import GetProductsInCategoryController from '../controllers/getProductsInCategoryController';

import ProductController from '../controllers/ProductController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productsRouter = Router();

const categoryController = new CategoryController();
const getProductsInCategoryController = new GetProductsInCategoryController();

const productController = new ProductController();

productsRouter.use(ensureAuthenticated);

// Category Routes

productsRouter.post('/category', categoryController.create);
productsRouter.get('/:category_id', getProductsInCategoryController.index);

// Product Routes

productsRouter.post('/:category_id/product', productController.create);

export default productsRouter;
