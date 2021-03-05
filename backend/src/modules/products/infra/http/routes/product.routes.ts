import { Router } from 'express';

import ProductController from '../controllers/Product/ProductController';
import GetProductController from '../controllers/Product/GetProductController';
import GetProductsInCategoryController from '../controllers/Product/GetProductsInCategoryController';
import PutProductController from '../controllers/Product/PutProductController';
import DeleteProductController from '../controllers/Product/DeleteProductController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productRouter = Router();

const productController = new ProductController();
const getProductController = new GetProductController();
const getProductsInCategoryController = new GetProductsInCategoryController();
const putProductController = new PutProductController();
const deleteProductController = new DeleteProductController();

productRouter.use(ensureAuthenticated);

productRouter.post('/:category_id/product', productController.create);
productRouter.get('/product/:product_id', getProductController.index);
productRouter.get(
  '/product/productsincategory/:category_id',
  getProductsInCategoryController.index,
);
productRouter.put('/product/edit/:product_id', putProductController.put);
productRouter.delete(
  '/product/delete/:product_id',
  deleteProductController.delete,
);

export default productRouter;
