
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import styles from "./footer.module.css";
import { NavLink } from 'react-router-dom';



const Footer: React.FC = () => {


    return (
        <>
            <div className={styles.footer}>

                <div >
                    <ul className={styles.linkList}>
                        <li>
                            <NavLink to="/" className="footerLinks">Hem</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className="footerLinks" >Köp våra produkter</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="footerLinks">Blogg</NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar" className="footerLinks">Kalender</NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacyPolicy" className="footerLinks" >Integritetspolicy</NavLink>
                        </li>

                    </ul>

                </div>


                <div className={styles.followerLinks}>
                    <a
                        href="https://www.facebook.com/majrovans/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Besök oss på Facebook"
                        className="footerLinks"
                    >
                            <img src={facebook} alt="facebookLogo" />

                    </a>
                        
                    <a 
                    href="https://www.instagram.com/majrovans/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Besök oss på Instagram"
                        className="footerLinks"
                    >
                            <img src={instagram} alt="instagramLogo" />
                    </a>
                    
                </div>

                <p className={styles.copyright}>© 2025 Majrovan. Alla bilder och illustrationer är Majrovans egendom.</p>

            </div>


        </>
    )
}

export default Footer
