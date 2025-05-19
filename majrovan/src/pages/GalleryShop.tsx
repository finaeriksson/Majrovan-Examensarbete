
import { NavLink } from "react-router-dom"
import CardGallery from "../components/galleryShop/CardGallery"
import styles from "./galleryshop.module.css"
import { useCart } from "../contexts/CartContext"
import Sidebar from "../components/Sidebar"



const GalleryShop: React.FC = () => {

  const { cart } = useCart()

  return (
    <div>
      <h1>Galleri</h1>
      <main className={styles.mainContainer}>

        <div className={styles.sidebarContainer}>
          <Sidebar>
          <NavLink to="/checkout" className={styles.checkoutButton}>
            Till kassan ({cart.length})
          </NavLink>
          
        </Sidebar>
        </div>
        

<div className={styles.gallerySection}>
          <CardGallery />
          

</div>
      </main>
    </div>
  )
}

export default GalleryShop