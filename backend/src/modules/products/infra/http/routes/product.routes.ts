import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const productRoutes = Router();

productRoutes.use(ensureAuthenticated);

productRoutes.post('/', productController.create);

productRoutes.get('/', productController.index);

productRoutes.put('/:sku', productController.update);

productRoutes.delete('/:sku', productController.delete);

export default productRoutes;
