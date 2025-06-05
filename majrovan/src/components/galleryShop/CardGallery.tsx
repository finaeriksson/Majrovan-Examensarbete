import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../lib/sanityClient';
import styles from './cardGallery.module.css';
import useSanityCards, { CardData } from '../../hooks/useSanityCards'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface CardGalleryProps {
  onAddToCart: (card: CardData) => void;
}
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const CardGallery: React.FC<CardGalleryProps> = ({ onAddToCart }) => {
  const cards = useSanityCards();

  return (
    <>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div key={card._id} className={styles.card}>
            {card.image && card.image.asset && (
              <img
                src={urlFor(card.image).width(400).quality(80).url()}
                srcSet={`
                  ${urlFor(card.image).width(400).quality(80).url()} 400w,
                  ${urlFor(card.image).width(800).quality(80).url()} 800w
                  `}
                sizes="(max-width: 600px) 100vw, 400px"
                width={400}
                style={{ height: 'auto' }}
                alt={card.title} />
            )}
            <h2>{card.title}</h2>
            <p>{card.price} kr</p>

            <button
              className="light-focus"
              onClick={() => onAddToCart(card)}
              aria-label={`Köp ${card.title} för ${card.price} kronor`}>
              Köp
            </button>
          </div>
        ))}

      </div>


    </>
  );
};

export default CardGallery;


