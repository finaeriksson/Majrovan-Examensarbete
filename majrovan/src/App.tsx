
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Main from './pages/Main'
import GalleryShop from './pages/GalleryShop'
import { CartProvider } from './contexts/CartContext';
import CheckoutPage from './pages/CheckoutPage';
import ThankYou from './pages/ThankYou';
import BlogPage from './pages/Blogpage';
import MajrovanCalendar from "./components/Calendar/MajrovanCalendar";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";


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
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/calendar' element={<MajrovanCalendar />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </CartProvider>
       
      </BrowserRouter>

    </>
  )
}

export default App
