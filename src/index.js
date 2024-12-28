const express = require('express');
const {PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');

const initDb = require('./dbInit');
// const {City, Airport} = require('./models/index');

const setupAndStartServer = async () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`started server on port ${PORT}`);
    })

    // const city = await City.findOne({
    //     where: {
    //         id: 5 
    //     }
    // })
    // const airport = await city.getAirports();
    // console.log(airport);
}

initDb().then(setupAndStartServer());

// setupAndStartServer();