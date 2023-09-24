import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'

import Home from './assets/pages/Home'
import Notfound from './assets/pages/Notfound'

const Products = lazy(() => import('./assets/pages/Products'));
const Events = lazy(() => import('./assets/pages/Events'));
const About = lazy(() => import('./assets/pages/About'));
const Contact = lazy(() => import('./assets/pages/Contact'));

const ShowProduct = lazy(() => import('./assets/pages/ShowProduct'));
const Register = lazy(() => import('./assets/pages/Register'));
const Login = lazy(() => import('./assets/pages/Login'));
const Order = lazy(() => import('./assets/pages/Order'));
const Favourite = lazy(() => import('./assets/pages/Favourite'));
const Account = lazy(() => import('./assets/pages/Account'));

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

            <Route path="/products" element={<Suspense fallback={<Home/>} ><Products/></Suspense>} />
            <Route path="/events" element={<Suspense fallback={<Home/>} ><Events/></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Home/>} ><About/></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<Home/>} ><Contact/></Suspense>} />

            <Route path="/showproduct/:id" element={<Suspense fallback={<Home/>} ><ShowProduct/></Suspense>} />
            <Route path="/order" element={<Suspense fallback={<Home/>} ><Order/></Suspense>} />
            <Route path="/account" element={<Suspense fallback={<Home/>} ><Account/></Suspense>} />
            <Route path="/favourite" element={<Suspense fallback={<Home/>} ><Favourite/></Suspense>} />

            <Route path="/login" element={<Suspense fallback={<Home/>} ><Login/></Suspense>} />
            <Route path="/register" element={<Suspense fallback={<Home/>} ><Register/></Suspense>} />

            <Route path="*" element={<Notfound/>} />
          </Routes>
        </Context.Provider>
        
      </Router>
    </>
  )
}

export default App