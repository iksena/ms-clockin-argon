import { Router } from 'express';

import getAbsences from './handler.js';
import middlewares from '../../../middlewares/index.js';

const router = Router();
const { withEmployeeService } = middlewares;

router.get(
  '/employees',
  withEmployeeService,
  getAbsences,
);

export default router;
