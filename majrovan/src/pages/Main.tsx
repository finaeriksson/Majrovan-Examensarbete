

import styles from "./main.module.css";
import Sidebar from "../components/Sidebar";
import GallerySection from "../components/GallerySection";


const Main: React.FC = () => {

    
   return (

        <div className={styles.pageContainer}>
            <div className={styles.aside}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.mainContainer}>
                <GallerySection></GallerySection>
            </div>
        </div>


    )

}

export default Main