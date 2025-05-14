
import styles from "./galleryMasonry.module.css"

interface GalleryMasonryProps {
    images: string[];
    onImageClick?: (idx:number) => void;
}

const GalleryMasonry: React.FC <GalleryMasonryProps> = ({ images, onImageClick }) => {


    return(
        <div className={styles.masonry}>
            {images.map((src, i) => (
                <div key={i} className={styles.item} onClick={() =>onImageClick?.(i)}>
                    <img src={src} alt={`Bild ${i+1}`}className={styles.image} />
                    <div className={styles.overlay}>
                        <span className={styles.icon}>🔍</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GalleryMasonry