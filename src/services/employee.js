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

  /**
   * Find all employees
   * @returns {Array<object>} list of employees
   */
  async getEmployees() {
    return this.employeesRepository.findAll();
  }

  async createEmployee(payload) {
    return this.employeesRepository.saveOrUpdate(payload);
  }
}

export default EmployeeService;
