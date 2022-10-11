import SignUp from './PAGES/SIGN UP/SignUp';
import "./App.scss"
import SignIn from './PAGES/SIGN IN/SignIn'
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './PAGES/MAINPAGE/MainPage'
import { useContext, useState } from 'react';
import { AuthContext } from './CONTEXT/AuthContext'
import Catalog from './PAGES/CATALOG/Catalog';
import ProductPage from './PAGES/PRODUCT-PAGE/ProductPage';
import Order from './PAGES/ORDER/Order';
import Navbar from './COMPONENTS/NAVBAR/Navbar';

function App() {
  const {currentUser} = useContext(AuthContext)
 
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/signin' />
    } 
    return children
  }

  const [cart, setCart] = useState([])

  const handleClick = (data) => {
    cart.push(data);
    setCart([...cart])
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1
    setCart([...arr])
  }

  return (
    <div>  
      <ProtectedRoute>
         <Navbar size={cart.length} />
      </ProtectedRoute>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<ProtectedRoute>
            <MainPage size={cart.length} />
          </ProtectedRoute>} />
          <Route path='/catalog' element={<ProtectedRoute><Catalog  />
          </ProtectedRoute>} />
          <Route path='/catalog/:id' element={<ProtectedRoute>
            <ProductPage handleClick={handleClick} />
          </ProtectedRoute>} />
          <Route path='/order' element={<ProtectedRoute><Order handleChange={handleChange} cart={cart} size={cart.length} setCart={setCart}  />
          </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
