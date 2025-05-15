

import styles from "./main.module.css";
import Sidebar from "../components/Sidebar";
import GallerySection from "../components/GallerySection";
import useMediaQuery from '../hooks/useMediaQuery';

const Main: React.FC = () => {

    const isDesktop = useMediaQuery('(min-width: 769px)')
    
   return (

        <div className={styles.pageContainer}>
            {isDesktop && (
                <aside className={styles.aside}>
                <Sidebar></Sidebar>
            </aside>
            )}
            
            <div className={styles.mainContainer}>
                <GallerySection></GallerySection>
            </div>
        </div>


    )

}

export default Main