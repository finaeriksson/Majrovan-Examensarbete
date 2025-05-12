

import styles from "./main.module.css";
import Sidebar from "../components/Sidebar";


const Main: React.FC = () => {


    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.sidbarContainer}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.mainContainer}>                
                    
                </div>


            </div>

        </>
    )
}

export default Main