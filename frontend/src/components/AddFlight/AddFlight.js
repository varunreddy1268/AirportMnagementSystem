import {useState} from 'react';
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import EmployeeNavBar from '../NavBar/EmployeeNavBar';

const AddFlight = props => {
    

    const onFormSubmitHandler = event => {
        event.preventDefault();

        let flightSchedule = {
            "baggage_carousel": null,
            "arrivalgate": null,
            "destinationgate": null
        };
    
        for(let i = 0; i < event.target.length - 1; i++) {
            flightSchedule[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/schedule`, flightSchedule)
        .then(response => {

            document.getElementById("add-flight-form").reset();
        })
        .catch(error => {
            
        });
    };

    return (
        <>
            <EmployeeNavBar />
            <div class="create_emp">
                <div class="text1">
                <Heading header="1" heading="Add Flight" />
</div>
                
                <Form id="add-flight-form" onSubmit={onFormSubmitHandler}>
                    <Input label="Flight" type="text" name="flight" required={true} />
                    <br>
                    </br>
                    <Input label="Name" type="text" name="name" required={true} />
                    <br>
                    </br>
                    <Input label="Source" type="text" name="source" required={true} />
                    <br>
                    </br>
                    <Input label="Destination" type="text" name="destination" required={true} />
                    <br>
                    </br>
                    <Input label="Start Time" type="datetime-local" name="start_time" required={true} />
                    <br>
                    </br>
                    <Input label="End Time" type="datetime-local" name="end_time" required={true} />
                    <br>
                    </br>
                    <Button type="submit"> Add Flight </Button>
                </Form>
        </div>
        </>
    );
};

export default AddFlight;
