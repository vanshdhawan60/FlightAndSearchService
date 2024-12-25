const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name: name });
      return city;
    } catch (err) {
      console.log("Something went wrong in the city repository layer");
      throw { err };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong in the city repository layer");
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      const city = City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the city repository layer");
      throw { err };
    }
  }

  async updateCity(cityId, data) {
    // data -> {key : value}
    try {
      //Below approach also works but can't return city. (only in PostgreSQL, we can do returning: true)
      // const city = City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   returning: true
      // });

      //in mysql, we use below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the city repository layer");
      throw { err };
    }
  }
}

module.exports = CityRepository;
