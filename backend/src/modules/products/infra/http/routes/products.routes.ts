import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';
import GetProductsInCategoryController from '../controllers/GetProductsInCategoryController';

import ProductController from '../controllers/ProductController';
import GetProductController from '../controllers/GetProductController';
import PutProductController from '../controllers/PutProductController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productsRouter = Router();

const categoryController = new CategoryController();
const getProductsInCategoryController = new GetProductsInCategoryController();

const productController = new ProductController();
const getProductController = new GetProductController();
const putProductController = new PutProductController();

productsRouter.use(ensureAuthenticated);

// Category Routes

productsRouter.post('/category', categoryController.create);
productsRouter.get(
  '/category/:category_id',
  getProductsInCategoryController.index,
);

// Product Routes

productsRouter.post('/:category_id/product', productController.create);
productsRouter.get('/product/:product_id', getProductController.index);
productsRouter.put('/product/:product_id', putProductController.put);

export default productsRouter;
