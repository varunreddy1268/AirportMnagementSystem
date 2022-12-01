import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from '../../axios/axiosInstance';

import styles from "./EnableDisableGates.module.css";

import EmployeeNavBar from '../NavBar/EmployeeNavBar';

import Heading from '../Heading/Heading';
import ShowMessage from "../ShowMessage/ShowMessage";

const EnableDisableGates = props => {
    const [message, setMessage] = useState({});
    const { city } = useParams();

    const [airport, setAirport] = useState({});
    
    
    const intToChar = (value) => {
        const code = 'A'.charCodeAt(0);
    
        return String.fromCharCode(code + value);
    };

    const showMessage = () => {
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    const onClickHandler = e => {
        const isDisabled = airport[0].disabledgates.includes(e.target.getAttribute('id'));

        if(isDisabled) {
            axios.post(`/enabledisablegates/enable/${airport[0]._id}/${e.target.getAttribute('id')}`)
            .then(response => {
                console.log(response.data);
                setMessage({
                    
                    "message": "Successfully enabled gate"
                });
            })
        }
        else {
            axios.post(`/enabledisablegates/disable/${airport[0]._id}/${e.target.getAttribute('id')}`)
            .then(response => {
                console.log(response.data);
                setMessage({
                    
                    "message": "Successfully disabled gate"
                });
            })
        }

        showMessage();
    };
    
    useEffect(() => {
        axios.get(`/enabledisablegates/${city}`)
        .then(response => {
            setAirport(response.data);
        })
    }, []);

    return (
        <>
            <EmployeeNavBar />
            <div className={styles["enable-disable-gates"]}>
                <h1> {props.heading} </h1>
                <table id="display" role="grid" class="flights_table">
                <thead>
                        <tr>
                            <th>
                                Gate 
                            </th>
                            <th>
                                Gates (Enable - Disable)
                            </th>
                        </tr>
                    </thead>
                <tbody>
                {
                Object.keys(message).length > 0 && <ShowMessage showMessage={message} />}
                
                {
                airport[0] && airport[0].terminals && airport[0].terminals.length > 0 ? 
                    <div className={styles.terminals}>
                        {
                        airport[0].terminals.map((terminal, i) => 
                        { 
                            let count = 0;
                            
                            return (
                                <div key={i} className={styles.terminal}>
                                    {terminal.map((gate, j) => {
                                        const gateNumber = intToChar(i) + new String(j+1);
                                        const isGate =  gate.length > 1;
                                        const isGateDisabled = airport[0].disabledgates.includes(gateNumber);

                                        if(!isGate || isGateDisabled) {
                                            return (
                                                <tr>
                                                    <td>
                                                   <> 
                                                   <td>
                                                   <Heading header="2" heading={gateNumber} />
                                                   </td>
                                                <td>
                                                <button id={gateNumber} onClick={onClickHandler}> Enable / Disable gate </button> 
                                                </td>
                                                </>
                                            </td>
                                            </tr>
                                            )
                                        }
                                        else {
                                            count++;
                                        }
                                    })}

                                    {terminal.length === count &&
                                        <div className={styles["not-available"]}>
                                            {`All available gates in terminal ${intToChar(i)} are occupied`}
                                        </div>
                                    }
                                </div>
                            )
                        })}
                
                    </div>
                : <h1> {props.loader} </h1>
            }
            </tbody>
            </table>
            </div>
        </>
    )
}

export default EnableDisableGates;