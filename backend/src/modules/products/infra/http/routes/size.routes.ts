import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import SizeController from '../controllers/SizeController';

const sizeController = new SizeController();

const sizeRoutes = Router();

sizeRoutes.use(ensureAuthenticated);

sizeRoutes.post('/', sizeController.create);

sizeRoutes.get('/', sizeController.index);

sizeRoutes.put('/:code', sizeController.update);

sizeRoutes.delete('/:code', sizeController.delete);

export default sizeRoutes;
