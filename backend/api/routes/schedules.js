const express = require('express');

const authentication = require('../middleware/authentication');
const flightScheduleController = require('../controllers/schedulesController');

const router = express.Router();


router.get('/fetchflights/:city', (request, response, next) => {
    console.log("Route for fetching flights with city", request.params);

    flightScheduleController.fetchFlightsWithCity(request, response);
});


 router.get('/assignedairlinecarousel/:airline', (request, response, next) => {
    console.log("Route for fetching assigned carousel for airline", request.params.airline);

    flightScheduleController.assignedAirlineCarousel(request, response);
})


router.post('/', (request, response, next) => {
    console.log("Route to add flight schedule", request.body);
    
    flightScheduleController.assignTerminalGate(request, response, flightScheduleController.saveFlightScheduleToDB);
});


 router.get('/:source/:destination', (request, response, next) => {
    console.log("Route to fetch flight schedule with source and destination", request.params);
    
    flightScheduleController.fetchFlights(request, response);
});


router.post('/update/:id', (request, response, next) => {
    console.log("Route to update flight schedule", request.params);
    
    flightScheduleController.assignTerminalGateUpdate(request, response, flightScheduleController.updateFlightSchedule);
});


router.get('/:flightId', (request, response, next) => {
    console.log("Route for fetching flights with id", request.params);
    
    flightScheduleController.fetchFlightWithId(request, response);
});

module.exports = router;