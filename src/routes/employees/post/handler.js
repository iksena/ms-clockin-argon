const createEmployee = async (req, res, next) => {
  const { logger, employee } = req.app.locals;

  try {
    const response = await employee.createEmployee(req.body);

    res.json(response);
  } catch (error) {
    logger.error(error, 'Something went wrong.');

    next(error);
  }
};

export default createEmployee;
