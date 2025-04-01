
// import styles from "./header.module.css";
import Blogpost from "./Blog/Blogpost";
import styles from "./main.module.css";
import Sidebar from "./Sidebar";


const Main: React.FC = () => {


    return (
        <>
        <div className={styles.header}>
            <div className={styles.mainContainer}>
            <Sidebar></Sidebar>
            <Blogpost></Blogpost>
            </div>
            

        </div>
            
        </>
    )
}

export default Main