
import { NavLink } from "react-router-dom"
import CardGallery from "../components/galleryShop/CardGallery"
import styles from "./galleryshop.module.css"
import { useCart } from "../hooks/useCart"
import Sidebar from "../components/Sidebar"



const GalleryShop: React.FC = () => {

  const { cart } = useCart()

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