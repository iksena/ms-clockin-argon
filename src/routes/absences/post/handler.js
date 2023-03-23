const postAbsence = async (req, res, next) => {
  const { events } = req.body;
  const { logger, absence } = req.app.locals;

  try {
    await absence.saveAbsence(events);

    res.sendStatus(200);
  } catch (error) {
    logger.error(error, 'Something went wrong.');

    next(error);
  }
};

export default postAbsence;
