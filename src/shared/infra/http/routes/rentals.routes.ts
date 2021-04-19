import { CreateRentalController } from '@modules/rentals/useCases/CreateRentalController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalsRoutes = Router();
const createRentalController = new CreateRentalController();
rentalsRoutes.use(ensureAuthenticated);

rentalsRoutes.post('/', createRentalController.handle);

export { rentalsRoutes };
