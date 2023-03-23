import services from '../services/index.js';

const { AbsenceService } = services;

const withAbsenceService = (req, res, next) => {
  const { logger } = req.app.locals;

  req.app.locals.absence = new AbsenceService({ logger });

  return next();
};

export default withAbsenceService;
