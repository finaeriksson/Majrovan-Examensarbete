
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
                        <NavLink to="/" >Hem</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" >Köp våra produkter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" >Blogg</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendar" >Kalender</NavLink>
                    </li>
                     <li>
                        <NavLink to="/privacyPolicy" >Integritetspolicy</NavLink>
                    </li>

                </ul>

            </div>


            <div className={styles.followerLinks}>
            <img src={facebook} alt="facebookLogo" className={styles.facebookLogo}/>
            <img src={instagram} alt="instagramLogo" className={styles.instagramLogo}/>

        </div>
        </div>
        
            
        </>
    )
}

export default Footer
