
import { NavLink } from "react-router-dom"
import CardGallery from "../components/galleryShop/CardGallery"
import styles from "./galleryshop.module.css"
import { useCart } from "../hooks/useCart"
import Sidebar from "../components/Sidebar"



const GalleryShop: React.FC = () => {
  const { cart, dispatch } = useCart()


  // Bygg order-strängen som skickas i mailet
    // const orderText = cart
    //     .map(c => `${c.title} — ${c.price} kr`)
    //     .join("\n")

  return (
    <div>
      <h1>Köp våra produkter</h1>
      <main className={styles.mainContainer}>

        <aside className={styles.sidebarContainer}>
          <Sidebar>
            <NavLink to="/checkout"
              className={styles.checkoutButton}
              aria-label="Gå till kassan"
            >
              Till kassan {" "}
              <span
                aria-live="polite"
                aria-atomic="true"
                className="sr-only">
                Det finns nu ({cart.length}) artiklar i varukorgen
              </span>
              ({cart.length})
            </NavLink>

<ul className={styles.cartList}>
                    <h4>Kundvagn</h4>
                    {cart.map(c => (
                        <li key={c._id} className={styles.cartItem}>
                            <div className={styles.itemInfo}>
                                {c.title} - {c.price} kr{""}
                            </div>
                            <div 
                            >
                                <button onClick={() => dispatch({ type: "REMOVE", id: c._id })}>
                                    Ta bort
                                </button>
                            </div>


                        </li>
                    ))}
                </ul>
          
          </Sidebar>
        </aside>


        <section className={styles.gallerySection}>
          <CardGallery />


        </section>
      </main>
    </div>
  )
}

export default GalleryShop