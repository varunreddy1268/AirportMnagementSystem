import { useNavigate } from 'react-router-dom';

import './FlightSchedulesForm.css'
import Heading from '../Heading/Heading';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import EmployeeNavBar from '../NavBar/EmployeeNavBar';

const FlightSchedulesForm = props => {
    const navigate = useNavigate();

    const onFormSubmitHandler = event => {
        event.preventDefault();
        let target = event.target;
        
        navigate(`/flightschedules/${target[0].value}/${target[1].value}`);
    };

    return (
        <>
            <EmployeeNavBar />
            <div class="create_emp">
                
            <h4 class="text1">
                <Heading header="1" heading={props.heading} />
                
            </h4>
                <Form id="flight-form" onSubmit={onFormSubmitHandler}>
                    <Input label="Source" type="text" name="source" required={true} />
                    <br>
                    </br>
                    <Input label="Destination" type="text" name="destination" required={true} />
                    <br>
                    </br>
                    <Button type="submit"> Fetch Flights </Button>
                </Form>
            </div>
        </>
    );
}

export default FlightSchedulesForm;