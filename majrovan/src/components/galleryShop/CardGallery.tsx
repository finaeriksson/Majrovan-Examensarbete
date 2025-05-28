import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../lib/sanityClient';
import styles from './cardGallery.module.css';
import useSanityCards from '../../hooks/useSanityCards'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useCart } from '../../hooks/useCart';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const CardGallery: React.FC = () => {
  const cards = useSanityCards();
  const { dispatch } = useCart()

  return (
    <>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div key={card._id} className={styles.card}>
            {card.image && card.image.asset && (
              <img
                src={urlFor(card.image).width(400).quality(80).url()}
                alt={card.title} />
            )}
            <h3>{card.title}</h3>
            <p>{card.price} kr</p>

            <button 
              // className={styles.buyButton}
              onClick={() => dispatch({ type: "ADD", card})}
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


