
import { NavLink } from "react-router-dom"
import CardGallery from "../components/gallery/CardGallery"
import styles from "./galleryshop.module.css"
import { useCart } from "../contexts/CartContext"



const GalleryShop: React.FC = () => {

  const { cart } = useCart()

  return (
    <div>
      <main className={styles.mainContainer}>
        <h1>Galleri</h1>
       
          <NavLink to="/checkout" className={styles.checkoutButton}>
            Till kassan ({cart.length})
          </NavLink>

          <NavLink to="/" className={styles.home}>
            Hem
          </NavLink>

        <CardGallery />
      </main>
    </div>
  )
}

export default GalleryShop