

import styles from "./main.module.css";
import Sidebar from "../components/Sidebar";
import GallerySection from "../components/GallerySection";
import useMediaQuery from '../hooks/useMediaQuery';
import presentation from '../images/PresentationsBild.jpg'

const Main: React.FC = () => {

    const isDesktop = useMediaQuery('(min-width: 769px)')
    
   return (

        <div className={styles.pageContainer}>
            {isDesktop && (
                <aside className={styles.aside}>
                <Sidebar>
                    <img src={presentation} alt="Presentationsbild" />
                    <p>Vi har funderat lite på om vi som gör Majrovans borde presentera oss? Här får ni därför en gammal 
                    bild från när våra liv till stor del innebar loppisar och bilutflykter, ångesthantering och jakten 
                    på den perfekta vågen. En kan säga att vi möttes i Malmös aktivistkretsar för en sisådär 10-12 år sen 
                    och har sedan dess tagit otaliga dopp i havet, hängt i ett strömlöst Puerto Rico, bilat i norra Spanien, 
                    gått vilse på flygplatsen i Barcelona, legat på sjukhus med hjärnskakning och stygn i huvudet pga 
                    surfskada som den ena orsakat den andra - för att idag istället jaga barn och det perfekta livet och 
                    inkomsten utan att behöva jobba mer än nödvändigt! Och just de, vi heter Rebecka och Sara. Den ena kan 
                    måla, den andra odla.</p>
                </Sidebar>
            </aside>
            )}
            
            <div className={styles.mainContainer}>
                <GallerySection></GallerySection>
            </div>
        </div>


    )

}

export default Main