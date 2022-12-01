import styles from './ArrivalsDeparturesFlights.module.css';


import Date from '../FlightDate/FlightDate';

import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const ArrivalsFlights = props => {
    return (
        <div className={styles["arrival-departure-flights"]}>
            {props.flights.length > 0 ? 
                <div>
                    <h1> {props.heading} </h1>
                    <ul className={styles["arrival-departure-flights-list"]}>
                        {props.flights.map((flight, i) => { 
                            return (
                                <li key={flight._id}>
                                    
                                        {props.departures && <>
                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.arrivalgate ? flight.arrivalgate : " - "} />
                                        
                                            <Date date={flight.start_time} />
                                        </>}
                                        
                                        <Heading header="2" heading={flight.source} />
                                        
                                        <div>
                                            <Heading header="2" heading={flight.flight} />
                                            <Heading header="2" heading={flight.name} />
                                        </div>

                                        <Heading header="2" heading={flight.destination} />
                                        
                                        {props.arrivals && <>
                                            <Date date={flight.end_time} />

                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.destinationgate ? flight.destinationgate : " - "} />

                                                <Paragraph paragraph="Carousel" />
                                                <Heading header="2" heading={flight.baggage_carousel ? flight.baggage_carousel : " - "} />
                                        </>}
                                    
                                </li>
                            )
                        })}
                    </ul>
                </div>
            : <h1> {props.loader} </h1>}
                   
        </div>
    )
};

export default ArrivalsFlights;