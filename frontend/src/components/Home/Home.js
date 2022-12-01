import Heading from '../Heading/Heading';
import './Home.css'

import styles from '../NavBar/NavBar.module.css';

const Home = props => {
    return (
        <>
    <div class="nav">
    <ul class>
          <li class="AL"><a href="/loginadmin">Admin</a></li>
          <li class="EL"><a href="/loginemployee">Employee</a></li>
          <li class="UL"><a href="/loginuser">User</a></li>
          <li class="SP"><a href="/createuser">Register</a></li>
     </ul>
    </div>
{/*  
    <p>elta is making it harder to get into its airport lounges after they were flooded by travelers</p>
            <p>Frontier Airlines pulls out of Burlington</p>
            <p>Alaska Airlines officially becomes first U.S. airline to launch electronic bag tag program </p>
            <p>Southwest Airlines is using data science to speed up boarding</p>
            <p>Delta Introduced First Of 33 Recently Purchased Used Boeing 737s</p>
            <p>Hawaiian Airlines Announces Services Between Hawai'i And Cook Islands</p> */}
       
    {window.location.pathname.includes('home') && 
                 <div class="text">Hey, Welcome To Airport Management System</div>
            }


    
        </>
    )
}

export default Home;