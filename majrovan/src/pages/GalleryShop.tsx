
import { NavLink } from "react-router-dom"
import CardGallery from "../components/galleryShop/CardGallery"
import styles from "./galleryshop.module.css"
import { useCart } from "../hooks/useCart"
import Sidebar from '../components/Sidebar';
import { CartProvider } from "../contexts/CartProvider"



const GalleryShop: React.FC = () => {
  const { cart, dispatch } = useCart()


  // Räkna ut totala antalet artiklar (summa av quantity för varje CartItem)
  const totalItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  // Bygg order-strängen som skickas i mailet
    // const orderText = cart
    //     .map(c => `${c.title} — ${c.price} kr`)
    //     .join("\n")

  return (
    <CartProvider>
      <div>
        <h1>Galleri – Shop</h1>
        <main className={styles.mainContainer}>
          {/* SIDOFÄLTET */}
          <Sidebar >
            <aside className={styles.sidebarContainer}>
              <div className={styles.presentation}>
              {/* Länk till kassan, visar antal totalt i varukorgen */}
              <NavLink
                to="/checkout"
                className="btn light-focus"
                aria-label="Gå till kassan"
              >
                Till kassan ({totalItems})
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="sr-only"
                >
                  Det finns nu {totalItems} artiklar i varukorgen
                </span>
              </NavLink>

              {/* Om varukorgen inte är tom, lista upp varje rad med titel + qty + +/- */}
              {cart.length > 0 ? (
                <ul className={styles.cartSummaryList}>
                  {cart.map(ci => (
                    <li key={ci.item._id} className={styles.cartItem}>
                      {/* Produktnamn + pris */}
                      <div className={styles.cartItemInfo}>
                        <span className={styles.cartItemTitle}>
                          {ci.item.title}
                        </span>
                        <span className={styles.itemPrice}>
                          {ci.item.price} kr
                        </span>
                      </div>

                      {/* Kvantitetskontroller: – + knappar */}
                      <div className={styles.quantityControls}>
                        <button
                          type="button"
                          className={`${styles.adjustButton} btn light-focus`}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ONE",
                              id: ci.item._id,
                            })
                          }
                          aria-label={`Minska antal av ${ci.item.title}`}
                        >
                          −
                        </button>

                        <span className={styles.quantityText}>
                          {ci.quantity}
                        </span>

                        <button
                          type="button"
                          className={`${styles.adjustButton} btn light-focus`}
                          onClick={() =>
                            dispatch({ type: "ADD", card: ci.item })
                          }
                          aria-label={`Öka antal av ${ci.item.title}`}
                        >
                          +
                        </button>
                      </div>

                      {/* Valfri ta bort-alla-knapp */}
                      <button
                        type="button"
                        className={`${styles.removeAll} btn light-focus`}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_ALL",
                            id: ci.item._id,
                          })
                        }
                        aria-label={`Ta bort alla av ${ci.item.title}`}
                      >
                        Ta bort alla
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.emptyCartText}>
                  Din varukorg är tom.
                </p>
              )}
            </div>
            </aside>
            
          </Sidebar>

          {/* GALLERIET: passera in onAddToCart‐callback som anropar dispatch */}
          <section className={styles.gallerySection}>
            <CardGallery onAddToCart={card => dispatch({ type: "ADD", card })} />
          </section>
        </main>
      </div>
    </CartProvider>
  )
}

export default GalleryShop