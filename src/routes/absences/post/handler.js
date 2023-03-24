const postAbsence = async (req, res, next) => {
  const { logger, absence } = req.app.locals;

  try {
    const response = absence.saveAbsence(req.body);

    res.json(response);
  } catch (error) {
    logger.error(error, 'Something went wrong.');

    next(error);
  }
};

export default postAbsence;
