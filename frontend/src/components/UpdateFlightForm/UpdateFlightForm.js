import { useState } from 'react';
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

const UpdateFlightForm = props => {
    
    
    
    
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
    
        axios.post(`/schedule/update/${props.flight._id}`, flightSchedule)
        .then(response => {
            

            document.getElementById("add-flight-form").reset();
        })
        .catch(() => {
            
        });
    };
    
    return (
        <div class="create_emp">

            <Heading header="1" heading={props.heading} />

            
            <Form id="add-flight-form" onSubmit={onFormSubmitHandler}>
                <Input label="Flight" inputClassName="input-disabled" type="text" name="flight" value={props.flight.flight} required={true} disabled={true} />
                <br></br>
                <Input label="Name" inputClassName="input-disabled" type="text" name="name" value={props.flight.name} required={true} disabled={true} />
                <br></br>
                <Input label="Source" inputClassName="input-disabled" type="text" name="source" value={props.flight.source} required={true} disabled={true} />
                <br></br>
                <Input label="Destination" inputClassName="input-disabled" type="text" name="destination" value={props.flight.destination} required={true} disabled={true} />
                <br></br>
                <Input label="Start Time" type="datetime-local" name="start_time" value={props.flight.starttime} required={true} />
                <br></br>
                <Input label="End Time" type="datetime-local" name="end_time" value={props.flight.endtime} required={true} />
                <br></br>
                <Button type="submit"> Update Flight </Button>
            </Form>
        </div>
    )
};

export default UpdateFlightForm;