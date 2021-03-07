import { Router } from 'express';
import usersRoutes from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '../../../../modules/users/infra/http/routes/sessions.routes';

import categoryRoutes from '../../../../modules/products/infra/http/routes/category.routes';
import colorRoutes from '../../../../modules/products/infra/http/routes/color.routes';
import modelRoutes from '../../../../modules/products/infra/http/routes/model.routes';
import sizeRoutes from '../../../../modules/products/infra/http/routes/size.routes';
import productRoutes from '../../../../modules/products/infra/http/routes/product.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

routes.use('/categories', categoryRoutes);
routes.use('/colors', colorRoutes);
routes.use('/models', modelRoutes);
routes.use('/sizes', sizeRoutes);
routes.use('/products', productRoutes);

export default routes;
