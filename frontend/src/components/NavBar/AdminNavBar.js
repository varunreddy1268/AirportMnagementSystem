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
        <div class="nav">
     <ul>
     <li> 
                    <a href="/dashboard" >
                        AMS
                    </a>
                </li>
                
                <li onClick={onClickLogoutHandler}>
                    <a href="/logout">
                        Logout
                    </a>
                </li>
                 <li>
                    <a href="/createemployee">
                        New Employee
                    </a>
                </li>
            
          </ul>
        </div>

        
            
            {window.location.pathname.includes('dashboard') && 
                <div class="text">Hey ADMIN , Welcome To Airport Management System</div>
                
            }
        </>
    )
}

export default AdminNavBar;
