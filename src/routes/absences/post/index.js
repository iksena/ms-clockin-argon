import { Router } from 'express';

import postAbsence from './handler.js';
import middlewares from '../../../middlewares/index.js';

const router = Router();
const { withAbsenceMiddleware } = middlewares;

router.get(
  '/absences',
  withAbsenceMiddleware,
  postAbsence,
);

export default router;
