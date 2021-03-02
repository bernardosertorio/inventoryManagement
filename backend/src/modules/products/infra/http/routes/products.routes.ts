import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';
import GetProductsInCategoryController from '../controllers/GetProductsInCategoryController';

import ProductController from '../controllers/ProductController';
import GetProductController from '../controllers/GetProductController';
import PutProductController from '../controllers/PutProductController';
import DeleteProductController from '../controllers/DeleteProductController';

import SkuController from '../controllers/SkuController';
import GetSkuController from '../controllers/GetSkuController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productsRouter = Router();

const categoryController = new CategoryController();
const getProductsInCategoryController = new GetProductsInCategoryController();

const productController = new ProductController();
const getProductController = new GetProductController();
const putProductController = new PutProductController();
const deleteProductController = new DeleteProductController();

const skuController = new SkuController();
const getSkuController = new GetSkuController();

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
productsRouter.put('/product/edit/:product_id', putProductController.put);
productsRouter.delete(
  '/product/delete/:product_id',
  deleteProductController.delete,
);

// Sku Routes

productsRouter.post('/:product_id/sku', skuController.create);
productsRouter.get('/sku/:sku_id', getSkuController.index);

export default productsRouter;
