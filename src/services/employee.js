/**
 * Represents service to handle employee
 */
class EmployeeService {
  /**
     *
     * @param {Object} args - class argument
     * @param {Object} args.logger - bunyan logger
     * @param {Object} args.employeesRepository - employees repository
    */
  constructor(args) {
    Object.assign(this, args);
  }

  async getEmployees() {
    return this.employeesRepository.findAll();
  }
}

export default EmployeeService;
