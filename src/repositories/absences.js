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

  async get(filter) {
    this.logger.info('[DB] Get user absences', filter);

    const {
      startDate,
      endDate,
      email,
    } = filter;

    const query = {
      $match: {
        ...email ?? { email },
        ...(!!startDate || !!endDate) && {
          createdAt: {
            ...startDate ?? { $gte: moment(startDate).startOf('day').toDate() },
            ...endDate ?? { $lte: moment(endDate).endOf('day').toDate() },
          },
        },
      },
    };
    const sort = { $sort: { createdAt: -1 } };

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

    return this.collection.insertOne(payload);
  }
}

export default AbsencesRepository;
