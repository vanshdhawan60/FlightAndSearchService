const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            error: {},
            msg: `Successfully created flight: ${flight}`,
            success: true,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to create flight"
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data: flights,
            error: {},
            msg: "Successfully fetched flights matching the filters",
            success: true,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to get flights"
        });
    }
}

module.exports = {
    create,
    getAll
}