import { Router } from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import categoryRouter from '../../../../modules/category/infra/http/routes/category.routes';
import productRouter from '../../../../modules/product/infra/http/routes/product.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/category', categoryRouter);
routes.use('/product', productRouter);

export default routes;
