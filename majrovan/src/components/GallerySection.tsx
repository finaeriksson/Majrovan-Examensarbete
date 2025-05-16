


import React, { useState } from "react";
import GalleryMasonry from "./GalleryMasonry";
import useSanityGalleryImages from "../hooks/useSanityGalleryImages";
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from "./GallerySection.module.css";
import '../index.css';                // <-- dina globala regler sist




const GalleryShowcase: React.FC = () => {
  const images = useSanityGalleryImages();


  // State för att styra Lightbox
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (

    <div className={styles.container}>

      <SimpleBar
        className="galleryWrapper"
        autoHide={true}
        style={{ maxHeight: '75vh' }}
      >
        <h3 className={styles.heading}>Galleri</h3>
        <GalleryMasonry
          images={images}
          onImageClick={(idx) => {
            setCurrentIndex(idx)
            setIsOpen(true)
          }}
        /></SimpleBar>




      {/* Lightbox när man klickar på en bild */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
        // (valfritt) tryck utanför bilden stänger
        controller={{ closeOnBackdropClick: true }}
      />
    </div>

  );
};

export default GalleryShowcase;
