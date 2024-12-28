const {Airplane} = require('../models/index');

class AirplaneRepository {
    static async getAirplane (id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the airplane repository layer");
            throw { error };
        }
    }
}

module.exports = AirplaneRepository;