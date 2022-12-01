import Heading from '../Heading/Heading';
import './Home.css'

import styles from '../NavBar/NavBar.module.css';

const Home = props => {
    return (
        <>
            

            <nav id="main-menu">
     <ul class="nav-bar">
          <li class="nav-button-home"><a href="/loginadmin">Admin-LogIn</a></li>
          <li class="nav-button-services"><a href="/loginemployee">Employee-LogIn</a></li>
          <li class="nav-button-products"><a href="/loginuser">User-Login</a></li>
          <li class="nav-button-products"><a href="/createuser">Sign-Up</a></li>
     </ul>
        </nav>
            
            {window.location.pathname.includes('home') && 
                 <div class="text">Hey, Welcome To Airport Management System</div>
            }
        </>
    )
}

export default Home;