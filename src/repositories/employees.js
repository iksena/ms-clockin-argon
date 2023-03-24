/**
 *  Represents the connection to employees collection in mongoDb
 */
class EmployeesRepository {
  /**
   * Initialize EmployeesRepository
   *
   * @param {object} opts - options
   * @property {object} opts.logger - logger object
   * @property {object} opts.collection - employees collection object
   * @property {object} opts.config - configuration object
   * @returns {void}
   */
  constructor(opts) {
    Object.assign(this, opts);
  }

  /**
   * Insert an employee
   *
   * @param {object} payload - user absence
   * @returns {promise<object>} employee of the user
   */
  async saveOrUpdate(payload) {
    this.logger.info('[DB] Insert or update employee', payload);

    const { email } = payload;
    const query = { email };
    const setter = {
      $set: payload,
    };
    const options = {
      upsert: true,
      returnOriginal: false,
    };

    const { value: data } = this.collection.findOneAndUpdate(query, setter, options);

    return data;
  }
}

export default EmployeesRepository;
