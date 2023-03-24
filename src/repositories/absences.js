import moment from 'moment';
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
   * Get absences by filter
   * @param {Object} filter - absence filter
   * @returns list of absencs
   */
  async get(filter) {
    const {
      startDate,
      endDate,
      email,
    } = filter;

    const query = {
      $match: {
        ...!!email && { email },
        ...(!!startDate || !!endDate) && {
          time: {
            ...!!startDate && { $gte: moment(startDate).startOf('day').toDate() },
            ...!!endDate && { $lte: moment(endDate).endOf('day').toDate() },
          },
        },
      },
    };
    const sort = { $sort: { time: -1 } };
    this.logger.info('[DB] Get user absences', { query, sort });

    return this.collection.aggregate([query, sort]).toArray();
  }

  /**
   * Insert a user absence
   *
   * @param {object} payload - user absence
   * @returns {promise<object>} absence of the user
   */
  async save(payload) {
    this.logger.info('[DB] Insert user absence', payload);

    return this.collection.insertOne({
      ...payload,
      time: moment(payload.time).toDate(),
      createdAt: new Date(),
    });
  }
}

export default AbsencesRepository;
