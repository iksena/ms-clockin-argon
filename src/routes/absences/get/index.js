import { Router } from 'express';

import getAbsences from './handler.js';
import middlewares from '../../../middlewares/index.js';

const router = Router();
const { withAbsenceMiddleware } = middlewares;

router.get(
  '/absences',
  withAbsenceMiddleware,
  getAbsences,
);

export default router;
