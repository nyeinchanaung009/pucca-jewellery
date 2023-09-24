import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'

import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Blank from './components/Blank';

const Products = lazy(() => import('./pages/Products'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const ShowProduct = lazy(() => import('./pages/ShowProduct'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Order = lazy(() => import('./pages/Order'));
const Favourite = lazy(() => import('./pages/Favourite'));
const Account = lazy(() => import('./pages/Account'));

import Context from './Context'
import data from './assets/data/resource.json'

function App() {
  const [datas,setDatas] = useState(data.data);
  const [favItems,setFavItems] = useState(localStorage.getItem('pucca_fav') ? JSON.parse(localStorage.getItem('pucca_fav')) : [41,16]);
  const [cartItems,setCartItems] = useState([]);

  const [orderItems,setOrderItems] = useState([]);

  const addToCart = (item) => {
    const ids = cartItems.map(val => val.id);
    
    if(ids.includes(item.id)){
        setCartItems(cartItems.map(val => val.id == item.id ? {...val,qty:val.qty+1} : val));
    }else{
        setCartItems([...cartItems,{...item,qty:1}]);
    }
  }

  return (
    <>
      <Router>
        <Context.Provider value={{datas,favItems,setFavItems,cartItems,addToCart,setCartItems,orderItems,setOrderItems}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />

            <Route path="/products" element={<Suspense fallback={<Blank/>} ><Products/></Suspense>} />
            <Route path="/events" element={<Suspense fallback={<Blank/>} ><Events/></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Blank/>} ><About/></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<Blank/>} ><Contact/></Suspense>} />

            <Route path="/showproduct/:id" element={<Suspense fallback={<Blank/>} ><ShowProduct/></Suspense>} />
            <Route path="/order" element={<Suspense fallback={<Blank/>} ><Order/></Suspense>} />
            <Route path="/account" element={<Suspense fallback={<Blank/>} ><Account/></Suspense>} />
            <Route path="/favourite" element={<Suspense fallback={<Blank/>} ><Favourite/></Suspense>} />

            <Route path="/login" element={<Suspense fallback={<Blank/>} ><Login/></Suspense>} />
            <Route path="/register" element={<Suspense fallback={<Blank/>} ><Register/></Suspense>} />

            <Route path="*" element={<Notfound/>} />
          </Routes>
        </Context.Provider>
        
      </Router>
    </>
  )
}

export default App