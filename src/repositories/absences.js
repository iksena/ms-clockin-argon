/**
 *  Represents the connection to absences collection in mongoDb
 */
class AbsencesRepository {
  /**
   * Initialize AbsencesRepository
   *
   * @param {object} opts - options
   * @property {object} opts.logger - logger object
   * @property {object} opts.collection - absence collection object
   * @property {object} opts.config - configuration object
   * @returns {void}
   */
  constructor(opts) {
    Object.assign(this, opts);
  }

  /**
   * Insert a user absence
   *
   * @param {object} payload - user absence
   * @returns {promise<object>} absence of the user
   */
  async save(payload) {
    this.logger.info('[DB] Insert user absence', payload);

    const { phone } = payload;
    const query = { phone };
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

export default AbsencesRepository;
