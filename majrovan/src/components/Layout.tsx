

import styles from './layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  

  return (
    <>
      <div className={styles.layout}>
      <Header></Header>
      <Main></Main>
      <main className={styles.content} >
        {children}
       
        
      </main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default Layout