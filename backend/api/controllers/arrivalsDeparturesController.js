const flightSchedule = require('../models/schedule');


 exports.fetchArrivalsAndDestinations = (request, response) => {
    flightSchedule.find({
        $or: [
            {source: request.params.city},
            {destination: request.params.city}
        ]
    })
    .exec()
    .then(documents => {
        console.log("Success fetching arrivals and departures from city in fetchArrivalsAndDestinations", documents);
        
        response.status(200).json(documents);
    })
    .catch(error => {
        console.log("Error fetching arrivals and departures from city in fetchArrivalsAndDestinations", error);
        
        response.status(500).json(error);
    });
};