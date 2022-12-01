import { useNavigate } from 'react-router-dom';

import Heading from '../Heading/Heading';

import styles from './NavBar.module.css';

const AdminNavBar = props => {
    const navigate = useNavigate();

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
        <nav id="main-menu">
     <ul class="nav-bar">
     <li> 
                    <a href="/dashboard" >
                        Airport Management System 
                    </a>
                </li>
                
                <li style={{float:"right"}} onClick={onClickLogoutHandler}>
                    <a href="/logout">
                        Logout
                    </a>
                </li>
                 <li style={{float:"right"}}>
                    <a href="/createemployee">
                        Add Employee
                    </a>
                </li>
            
          </ul>
        </nav>
            
            
            {window.location.pathname.includes('dashboard') && 
                <div class="text">Hey ADMIN , Welcome To Airport Management System</div>
            }
        </>
    )
}

export default AdminNavBar;
