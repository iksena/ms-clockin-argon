import { Router } from 'express';

import getAbsences from './handler.js';
import middlewares from '../../../middlewares/index.js';
import schema from './schema.js';

const router = Router();
const { withEmployeeService, withValidateSchema } = middlewares;

router.post(
  '/employees',
  withValidateSchema(schema),
  withEmployeeService,
  getAbsences,
);

export default router;
