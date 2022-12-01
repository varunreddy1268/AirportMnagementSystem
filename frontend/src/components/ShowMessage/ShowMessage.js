import styles from './ShowMessage.module.css';

const ShowMessage = props => {
    return (
        <div className={styles["show-message-wrapper"]}>
           <div>
                {props.showMessage.message}
            </div>
        </div>
    )
}

export default ShowMessage;
