const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepo = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.cityRepo.createCity(data);
            return city;
        } catch (error) {
            console.log("Somethign went wrong in the city-service layer.");
            throw({error});
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepo.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Somethign went wrong in the city-service layer.");
            throw({error});
        }
    }
    async deleteCity(cityId) {
        try {
            return await this.cityRepo.deleteCity(cityId);
        } catch (error) {
            console.log("Somethign went wrong in the city-service layer.");
            throw({error});
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepo.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Somethign went wrong in the city-service layer.");
            throw({error});
        }
    }
    async getAllCities(query) {
        try {
            const cities = await this.cityRepo.getAllCities({name: query.name});
            return cities;
        } catch (error) {
            console.log("Somethign went wrong in the city-service layer.");
            throw({error});
        }
    }
}

module.exports = CityService;