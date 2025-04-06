
import Blogpost from "./Blog/Blogpost";
import CardGallery from "./gallery/CardGallery";
import styles from "./main.module.css";
import Sidebar from "./Sidebar";


const Main: React.FC = () => {


    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.sidbarContainer}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.mainContainer}>

                    <Blogpost></Blogpost>
                    <CardGallery></CardGallery>
                </div>


            </div>

        </>
    )
}

export default Main