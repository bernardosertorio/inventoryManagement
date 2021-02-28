import { Router } from 'express';

import ProductController from '../controllers/ProductController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const productRouter = Router();
const productController = new ProductController();

productRouter.use(ensureAuthenticated);

productRouter.post('/', productController.create);

export default productRouter;
