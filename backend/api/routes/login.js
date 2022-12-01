const express = require('express');

const loginController = require('../controllers/loginController');

const router = express.Router();


 router.post('/admin', (request, response, next) => {
    console.log("Route for login admin", request.body);

    loginController.loginAdmin(request, response);
});


 router.post('/employee', (request, response, next) => {
    console.log("Route for login employee", request.body);

    loginController.loginEmployee(request, response);
});


 router.post('/user', (request, response, next) => {
    console.log("Route for login user", request.body);

    loginController.loginUser(request, response);
});

module.exports = router;
