
import styles from "./galleryMasonry.module.css"

interface GalleryMasonryProps {
    images: string[];
    onImageClick?: (idx:number) => void;
}

const GalleryMasonry: React.FC <GalleryMasonryProps> = ({ images, onImageClick }) => {

    

    return(
        
        <div className={styles.masonry}>
            {images.map((src, i) => (
                <button 
                    key={i} 
                    type="button"
                    className={styles.item} 
                    onClick={() =>onImageClick?.(i)}
                    aria-label={`Öppna bild nummer ${i + 1}`}>
                        <img src={src} alt={`Bild ${i+1}`}className={styles.image} />
                        <div className={styles.overlay}>
                            <span className={styles.icon}>🔍</span>
                        </div>
                </button>
            ))}
        </div>
    )
}

export default GalleryMasonry