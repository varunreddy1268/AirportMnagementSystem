const express = require('express');

const authentication = require('../middleware/authentication');
const enableDisableGatesController = require('../controllers/enableDisableGatesController');

const router = express.Router();


router.get('/:city', (request, response, next) => {
    console.log("Route for fetching terminal gates based on city", request.params.city);
    
    enableDisableGatesController.fetchTerminalsGates(request, response);
});


router.post('/disable/:id/:terminalgate', (request, response, next) => {
    console.log("Route for disabling terminal gate for id", request.params.id, request.params.terminalgate);
    
    enableDisableGatesController.disableTerminalsGatesWithId(request, response);
});


router.post('/enable/:id/:terminalgate', (request, response, next) => {
    console.log("Route for enabling terminal gate for id", request.params.id, request.params.terminalgate);
    
    enableDisableGatesController.enableTerminalsGatesWithId(request, response);
});

module.exports = router;