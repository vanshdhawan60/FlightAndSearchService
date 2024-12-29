const CrudService = require('./crud-service');
const {AirportRepository} = require ('../repository/index');

class AirportService extends CrudService {
    constructor () {
        const airportRepo = new AirportRepository();
        super(airportRepo);
    }
}

module.exports = AirportService;