import { Router } from 'express';

import async from '../../middlewares/async.middleware';
import HomeCtrl from '../../controllers/home.controller';

const router = Router();

router.get('/', async(HomeCtrl.home));

export default router;
