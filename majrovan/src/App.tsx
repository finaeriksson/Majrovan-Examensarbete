

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Main from './pages/Main'
import GalleryShop from './pages/GalleryShop'
import { CartProvider } from './contexts/CartContext';
import CheckoutPage from './pages/CheckoutPage';
import ThankYou from './pages/ThankYou';

const App: React.FC = () => {


  return (
    <>
      <BrowserRouter>
      <CartProvider>
         <Layout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/gallery' element={<GalleryShop />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/thankYou' element={<ThankYou />}/>
          </Routes>
        </Layout>
      </CartProvider>
       
      </BrowserRouter>

    </>
  )
}

export default App
