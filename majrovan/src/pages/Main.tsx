
import Blogpost from "../components/Blog/Blogpost";
// import CardGallery from "../components/gallery/CardGallery";
import styles from "./main.module.css";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";


const Main: React.FC = () => {


    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.sidbarContainer}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.mainContainer}>

                <NavLink to="/gallery">Galleri</NavLink>
                
                    <Blogpost></Blogpost>
                </div>


            </div>

        </>
    )
}

export default Main