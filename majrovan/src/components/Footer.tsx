
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import styles from "./footer.module.css";
import { NavLink } from 'react-router-dom';



const Footer: React.FC = () => {


    return (
        <>
        <div className={styles.footer}>

            <NavLink to={'./privacyPolicy'}> Integritetspolicy</NavLink>
            

            <div className={styles.followerLinks}>
            <img src={facebook} alt="facebookLogo" className={styles.facebookLogo}/>
            <img src={instagram} alt="instagramLogo" className={styles.instagramLogo}/>

        </div>
        </div>
        
            
        </>
    )
}

export default Footer
