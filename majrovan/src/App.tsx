
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import { CartProvider } from './contexts/CartProvider';
import { lazy, Suspense } from "react";
const Main           = lazy(() => import('./pages/Main'))
const GalleryShop    = lazy(() => import('./pages/GalleryShop'))
const CheckoutPage   = lazy(() => import('./pages/CheckoutPage'))
const ThankYou       = lazy(() => import('./pages/ThankYou'))
const BlogPage       = lazy(() => import('./pages/Blogpage'))
const MajrovanCalendar = lazy(() => import('./components/Calendar/MajrovanCalendar'))
const AboutUs        = lazy(() => import('./pages/AboutUs'))
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'))

const App: React.FC = () => {


  return (
    <>
      <BrowserRouter>
      <CartProvider>
         <Layout>
          <Suspense fallback={<div>Laddar…</div>}>
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
          </Suspense>
        </Layout>
      </CartProvider>
       
      </BrowserRouter>

    </>
  )
}

export default App
