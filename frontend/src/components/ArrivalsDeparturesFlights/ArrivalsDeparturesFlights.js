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
                    <table id="display" role="grid" class="flights_table">
                    <thead>
                        <tr>
                            <th>
                                Arrival City
                            </th>
                            <th>
                                Airline
                            </th>

                            <th>
                                Departure City
                            </th>
                            <th>
                                Arrival Time
                            </th>
                            <th>
                                Gate Assigned
                            </th>
                            <th>
                                Carousel
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.flights.map((flight, i) => { 
                            return (
                                <tr key={flight._id}>
                                    
                                        {props.departures && <>

                                        <td>
                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.arrivalgate ? flight.arrivalgate : " - "} />
                                        </td>
                                            <Date date={flight.start_time} />
                                        </>}
                                        <td>
                                        <Heading header="2" heading={flight.source} />
                                        </td>
                                        <td>
                                        <div>
                                            <Heading header="2" heading={flight.flight} />
                                            <Heading header="2" heading={flight.name} />
                                        </div>
                                        </td>
                                        <td>
                                        <Heading header="2" heading={flight.destination} />
                                        </td>
    
                                        {props.arrivals && <>
                                        <td>
                                            <Date date={flight.end_time} />
                                            </td> 
                                            <td>
                                                <Paragraph paragraph="Gate" />
                                                <Heading header="2" heading={flight.destinationgate ? flight.destinationgate : " - "} />
</td>
<td>
                                                <Paragraph paragraph="Carousel" />
                                                <Heading header="2" heading={flight.baggage_carousel ? flight.baggage_carousel : " - "} />
                                            </td>
                                        </>}
                                        
                                    
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>
                </div>
            : <h1> {props.loader} </h1>}
                   
        </div>
    )
};

export default ArrivalsFlights;