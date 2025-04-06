

import styles from './layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


const Layout: React.FC = () => {


  return (
    <>
      <div className={styles.layout}>
        <Header></Header>
        
        <main className={styles.content} >
          <Main></Main>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout

