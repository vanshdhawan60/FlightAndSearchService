const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            error: {},
            msg: "Successfully created airport!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            msg: "Unable to create airport!"
        })
    }
}

module.exports = {
    create,
}