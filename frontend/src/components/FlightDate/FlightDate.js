import styles from './FlightDate.module.css';

const FlightDate = props => {
    const date = new Date(props.date);
    const month = date.toLocaleString('en-us', {month:'long'});
    const day = date.toLocaleString('en-US', {day:'2-digit'});
    const time = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <div className={styles["flight-date"]}>
            <div className={styles["flight-month"]}>{day} {month} {time}</div>
        </div>
    );
}

export default FlightDate;