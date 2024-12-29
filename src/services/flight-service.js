const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService {
    async createFlight (data) {
        try {
            if (!compareTime(data.departureTime, data.arrivalTime)) {
                throw {error: "Arrival time cannot be less than departure time!"};
            }
            const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
            const seats = airplane.capacity;

            const flight = await FlightRepository.createFlight({...data, totalSeats:seats});
            return flight; 

        } catch (error) {
            console.log("Somethign went wrong in the flight-service layer.");
            throw({error});
        }

    }

    async getFlight(id) {
        try {
            const flight = await FlightRepository.getFlight(id);
            return flight; 
        } catch (error) {
            console.log("Somethign went wrong in the flight-service layer.");
            throw({error});
        }
    }

    async getAllFlights(query) {
        try {
            const flight = await FlightRepository.getAllFlights(query);
            return flight; 
        } catch (error) {
            console.log("Somethign went wrong in the flight-service layer.");
            throw({error});
        }
    }
}

module.exports = FlightService;

/**
 * Data which the controller sends to flightService createFlight :
 * {
 *      flightNumber,
 *      airplaneId,
 *         ... etc
 * 
 *          but won't get totalSeats.
 *              -> fetch from airplane repository!
 * }
 */
