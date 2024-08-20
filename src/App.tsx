
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigatin';



function App() {
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App;
