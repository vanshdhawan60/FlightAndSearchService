const { CityService, CityService } = require('../services/index');

const cityService = new CityService();

// POST -> 
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        // req.body -> object whcih contains {city: "xyz"};
        return res.status(201).json({
            data: city,
            error: {},
            success: true,
            msg: "Successfully created city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to create city"
        });
    }
}

// PATCH -> /city/:id & updated info in req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        // becaue id is in req.params for DELETE 
        return res.status(201).json({
            data: city,
            error: {},
            success: true,
            msg: "Successfully updated city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to update city"
        });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        // becaue id is in req.params for DELETE 
        return res.status(201).json({
            data: response,
            error: {},
            success: true,
            msg: "Successfully deleted city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to delete city"
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        // becaue id is in req.params for GET
        return res.status(201).json({
            data: city,
            error: {},
            success: true,
            msg: "Successfully fetched city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            error: error,
            success: false,
            msg: "Unable to get city"
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update
}