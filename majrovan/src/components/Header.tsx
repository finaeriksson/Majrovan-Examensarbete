
import bukett2 from "../images/bukett2.jpg";
import styles from "./header.module.css";


const Header: React.FC = () => {


    return (
        <>
            <div
                className={styles.header}
                style={{ backgroundImage: ` url(${bukett2})` }}>


                <div className={styles.overlay}>
                    <h1>Majrovan</h1>
                    <h3>Odlingstips direkt från grönsakslandet</h3>

                </div>


            </div>
        </>
    )
}

export default Header
