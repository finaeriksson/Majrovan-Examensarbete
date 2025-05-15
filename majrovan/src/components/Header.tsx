
import { NavLink } from "react-router-dom";
import bukett2 from "../images/bukett2.jpg";
import styles from "./header.module.css";
import { useState } from "react";
import MobileMenu from "../pages/MobileMenu";


const Header: React.FC = () => {

    const [open, setOpen] = useState(false);


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

            {/* desktop menu */}
            <nav className={styles.stickyMenu}>

                {/* hamburger menu */}
                <button
                    className={styles.burger}
                    aria-label="Öppna menyn"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>

                <MobileMenu open={open} onClose={() => setOpen(false)} />


                <ul className={styles.linkList}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                            Hem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                            Köp våra produkter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                            Blogg
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}>
                            Kalender
                        </NavLink>
                    </li>

                </ul>

            </nav>


        </>
    )
}

export default Header
