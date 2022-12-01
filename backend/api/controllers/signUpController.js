const bcrypt = require('bcrypt');

const signUpEmployee = require('../models/employee');
const signUpUser = require('../models/user');


const saveEmployeeToDB = (request, response, hash) => {
    console.log("Save employee to DB in saveEmployeeToDB");
    
    let employeeProperties = request.body.airline ? {
        "airline": request.body.airline
    } : {
        "city": request.body.city
    };

    const employee = new signUpEmployee({
        username: request.body.username,
        email: request.body.email,
        password: hash,
        employeeType: request.body.employeetype,
        ...employeeProperties
    });

    employee.save()
    .then(emp => {
        response.status(201).json({
            message: "Employee created"
        });
    })
    .catch(err => {
        response.status(500).json({
            error: err
        })
    });
};


const saveUserToDB = (request, response, hash) => {
    
    // console.log("Save user to DB in saveUserToDB", request);
    
    const user = new signUpUser({
        username: request.body.username,
        email: request.body.email,
        password: hash
    });
    console.log(user)
 console.log(user)
    user.save()
    .then(res => {
        console.log("SSSSS")
        response.status(201).json({
            message: "User Sign Up Successful"
        });
    })
    .catch(err => {
        console.log("NNNN")
        response.status(500).json({
            error: err
        })
    });
};

const findUser = (finder, request, response, callback) => {
    console.log("Find user in findUser in sign up", finder);
    
    finder.find({
        email: request.body.email
    })
    .exec()
    .then(result => {
        if(result.length > 0) {
            return response.status(409).json({
                message: "User with below email already exists"
            })
        }
        else {
            bcrypt.hash(request.body.password, 10, (error, hash) => {
                if(error) {
                    return response.status(500).json({
                        error: error
                    })
                }
                else {
                    callback(request, response, hash);
                }
            });
        }
    });
}



exports.signUpEmployee = (request, response) => {
    findUser(signUpEmployee, request, response, saveEmployeeToDB);
};


 exports.signUpUser = (request, response) => {
    findUser(signUpUser, request, response, saveUserToDB);
};
