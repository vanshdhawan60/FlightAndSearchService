const { Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
  static async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the city repository layer");
      throw { error };
    }
  }
  static async getFlight (id) {
    try {
      const flight = await Flight.findByPk(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the city repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;