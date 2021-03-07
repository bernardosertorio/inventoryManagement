import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import ColorController from '../controllers/ColorControlle';

const colorController = new ColorController();

const colorRoutes = Router();

colorRoutes.use(ensureAuthenticated);

colorRoutes.post('/', colorController.create);

colorRoutes.get('/', colorController.index);

colorRoutes.put('/:code', colorController.update);

colorRoutes.delete('/:code', colorController.delete);

export default colorRoutes;
