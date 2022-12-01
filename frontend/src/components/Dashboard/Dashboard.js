import AdminNavBar from '../NavBar/AdminNavBar';
import EmployeeNavBar from '../NavBar/EmployeeNavBar';
import UserNavBar from '../NavBar/UserNavBar';

const Dashboard = props => {
    const role = localStorage.getItem('role');

    return (
        <>
            {role === "admin" && 
                <AdminNavBar />
            }
            {(role === "Airport" || role === "Airline") && 
                <EmployeeNavBar />
            }
            {role === "user" && 
                <UserNavBar />
            }
        </>
    )
}

export default Dashboard;