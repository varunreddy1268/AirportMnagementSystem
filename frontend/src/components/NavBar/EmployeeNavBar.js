import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';

import styles from './NavBar.module.css';

const EmployeeNavBar = props => {
    const navigate = useNavigate();

    const role = localStorage.getItem('role');
    const city = localStorage.getItem('city')

    const onClickLogoutHandler = event => {
        event.preventDefault();

        localStorage.removeItem('token')
        localStorage.removeItem('role');
        localStorage.removeItem('city');
        localStorage.removeItem('airline');

        navigate('/home');
    };

    return (
        <>


            {role === "Airport" ? 
            <nav id="main-menu">
            <ul class="nav-bar">
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
                        <a href={`/enabledisablegates/${city}`}>
                            Maintain Gates
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href={`/assigncarousel/${city}`}>
                            Assign Carousel
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/dashboard">
                            Home
                        </a>
                    </li>
                </ul> 
                </nav>
                : 
                <nav id="main-menu">
                <ul className="nav-bar">
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
                        <a href="/getflightschedules">
                            Update Flight
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/addflight">
                            Add Flight
                        </a>
                    </li>
                    <li style={{float:"right"}}>
                        <a href="/dashboard">
                            Home
                        </a>
                    </li>
                </ul>
                </nav>
            }


            {window.location.pathname.includes('dashboard') && 
            
                <div className="text">
                    <Heading header="1" heading={`Welcome ${role} Employee`} />
                </div>
            }
        </>
    )
}

export default EmployeeNavBar;
