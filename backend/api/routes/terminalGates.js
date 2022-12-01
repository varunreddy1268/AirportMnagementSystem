const express = require('express');

const terminalGatesController = require('../controllers/terminalGatesController');

const router = express.Router();


router.get('/', (request, response, next) => {
    console.log("Route for fetching terminals and gates");
    
    terminalGatesController.getTerminalGate(request, response);
});


router.post('/', (request, response, next) => {
    console.log("Route for assigning terminal and gate randomly");
    
    terminalGatesController.fetchTerminalsGates(request, response);
});


router.get('/:city', (request, response, next) => {
    console.log("Route for fetching terminals with city", request.params.city);
    
    terminalGatesController.getTerminalGateWithCity(request, response);
});

module.exports = router;