import { Router } from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import categoryRouter from '../../../../modules/products/infra/http/routes/category.routes';
import productRouter from '../../../../modules/products/infra/http/routes/product.routes';
import skuRouter from '../../../../modules/products/infra/http/routes/sku.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/categories', categoryRouter);
routes.use('/product', productRouter);
routes.use('/sku', skuRouter);

export default routes;
