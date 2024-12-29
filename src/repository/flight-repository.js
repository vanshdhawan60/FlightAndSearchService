const { Op } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {

  static #createFilter (data) {
    let filter = {};
    if (data.departureAirportId) filter.departureAirportId = data.departureAirportId;
    if (data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
    let priceFilter = {};
    if (data.minPrice) priceFilter[Op.gte] = data.minPrice;
    if (data.maxPrice) priceFilter[Op.lte] = data.maxPrice;
    filter = {...filter, price: priceFilter};
    console.log((filter));
    return filter;
  }

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
      console.log("Something went wrong in the flight repository layer");
      throw { error };
    }
  }

  static async getAllFlights (filter) {
    try {
      console.log(filter);
      const filterQuery = this.#createFilter(filter);
      const flights = await Flight.findAll({
        where: filterQuery
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer");
      throw { error };
    }
  }

}

module.exports = FlightRepository;