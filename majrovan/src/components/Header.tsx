
import { NavLink } from "react-router-dom";
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
            <nav className={styles.stickyMenu}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                    Hem
                </NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                    Köp våra produkter
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                    Blogg
                </NavLink>

            </nav>
        </>
    )
}

export default Header
