import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios/axiosInstance';

import styles from './Flight.module.css';


import Date from '../FlightDate/FlightDate';
import Button from '../Button/Button';

import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Flight = props => {
    const navigate = useNavigate();
    
    const onClickHandler = flightId => {
        navigate(`/selectflight/${flightId}`);
    };

    return (
        <>
                <td>
                    <Heading header="3" heading={props.flight.arrivalgate ? props.flight.arrivalgate : " - "} />
                </td>

                <td>
                    <Date date={props.flight.start_time} />
                </td>
            
                <td>
                    <Heading header="3" heading={props.flight.source} />
                </td>
            
                <td>
                    <Heading header="3" heading={props.flight.flight} />
                    <Heading header="3" heading={props.flight.name} />
                </td>

                <td>
                    <Heading header="3" heading={props.flight.destination} />
                </td>
            
                <td>
                    <Date date={props.flight.end_time} />
                </td>

                <td>
                    <Heading header="3" heading={props.flight.destinationgate ? props.flight.destinationgate : " - "} />
                </td>

            {props.buttonText && <Button id={`${props.flight._id}`} type="button" onClick={onClickHandler} > {props.buttonText} </Button>}
        </>
    )
}

export default Flight;
