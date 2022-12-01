import styles from './Flights.module.css';

import Flight from '../Flight/Flight';

const Flights = props => {
    const role = localStorage.getItem('role');
    const airline = localStorage.getItem('airline');

    return (
        <div className={styles.flights}>
            {props.flights.length > 0 ? 
               <div class="tbl-header">
                    <h1> {props.heading} </h1>
                    <table id="display" role="grid" class="flights_table">
                    
                    <thead>
                        <tr>
                            <th>
                                Departure Gate
                            </th>
                            <th>
                                Departure Time 
                            </th>
                            <th>
                                Source City
                            </th>
                            <th>
                                Airline Info
                            </th>
                            <th>
                                Destination City 
                            </th>
                            
                            <th>
                                Arrival Time
                            </th>
                            
                            <th>
                                Arrival Gate
                            </th>
                            
                            <th>
                                Update Flight 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.flights.map((flight, i) => { 
                            return ((role === "Airport" && flight.baggage_carousel === null) || (role === "Airline" && airline === flight.name)) &&
                                <tr key={flight._id}>
                                    <Flight flight={flight} buttonText={props.buttonText} />
                                </tr>     
                        })}
                    </tbody>
                    </table>
                </div>
            : <h1> {props.loader} </h1>}
                   
        </div>
    )
};

export default Flights;