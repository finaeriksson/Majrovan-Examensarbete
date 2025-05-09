

import styles from './layout.module.css'
import Header from './Header';
import Footer from './Footer';


const Layout: React.FC<{children:React.ReactNode}> = ({children}) => {


  return (
    <>
      <div className={styles.layout}>
        <Header />
        
        <main className={styles.content} >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

