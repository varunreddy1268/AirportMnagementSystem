import { useState } from 'react';
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';
import './CreateEmploye.css'

import Form from '../Form/Form';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import AdminNavBar from '../NavBar/AdminNavBar';

const CreateEmployee = props => {
    const options = ["Airline", "Airport"];

    const [employeeType, setEmployeeType] = useState({
        "type": "Airline"
    });

    
    
    const onChange = value => {
        setEmployeeType({
            "type": value
        });
    };

    
    
    const onFormSubmitHandler = event => {
        event.preventDefault();
    
        let employee = {};

        for(let i = 0; i < event.target.length - 1; i++) {
            employee[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/signup/employee`, employee)
        .then(response => {
            
        })
        .catch(error => {
            
        });


        document.getElementById("add-employee-form").reset();
    };
    
    return (
        <>
            <AdminNavBar />
            <div class="create_emp">
                <Heading header="1" heading={props.heading} />

                
                <Form id="add-employee-form" onSubmit={onFormSubmitHandler}>
                <div className="user-box">
                    <Input label="USERNAME" type="text" name="username"  required={true} />
            </div><br></br>
                    <div className="user-box">
            
                    <Input label="EMAIL" type="email" name="email" required={true} />
            </div><br></br>
                    <div className="user-box">
            
                    <Input label="PASSWORD" type="password" name="password"  required={true} />
            </div><br></br>
                    <div className="user-box">
            
                    <Select label="EMPLOYEE TYPE" name="employeetype" required={true} options={options} onChange={onChange} />
    <br></br>
                    {employeeType.type === "Airline" ? 
                        <Input label="AIRLINE" type="text" name="airline"  required={true} /> :
                        <Input label="CITY" type="text" name="city"  required={true} />
                    }
            </div>
            <br></br>
                    <Button type="submit"> ADD EMPLOYEE </Button>
                </Form>
            </div>
        </>
    )
};

export default CreateEmployee;