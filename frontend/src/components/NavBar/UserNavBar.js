import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './NavBar.module.css';

const UserNavBar = props => {
    const navigate = useNavigate();
    

    const onFormSubmitHandler = event => {
        event.preventDefault();

        localStorage.setItem('userCity', event.target[0].value);

        document.getElementById("add-city-form").reset();
    };

    const onClickLogoutHandler = event => {
        event.preventDefault();

        localStorage.removeItem('token')
        localStorage.removeItem('role');
        localStorage.removeItem('city');
        localStorage.removeItem('airline');
        localStorage.removeItem('userCity');

        navigate('/home');
    };

    return (
        <>
            <ul className={styles.navbar}>
                <li> 
                    <a href="/dashboard" >
                        Airport Management System 
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="/logout" onClick={onClickLogoutHandler}>
                        Logout
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="/departures">
                        Departures
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="/arrivals">
                        Arrivals
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="/dashboard">
                        Home
                    </a>
                </li>
            </ul>

            {window.location.pathname.includes('dashboard') &&
                <>
                    <div className={styles["home-heading-top"]}>
                        <Heading header="1" heading="Welcome" />
                    </div>

                    <div>
                        <Heading header="1" heading="Enter your current city" />

                        
                        <Form id="add-city-form" onSubmit={onFormSubmitHandler}>
                            <Input label="City" type="text" name="city" required={true} />
                            <Button type="submit"> Submit </Button>
                        </Form>
                    </div>
                </>
            }
        </>
    )
}

export default UserNavBar;
