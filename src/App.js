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

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<ProtectedRoute>
            <MainPage />
          </ProtectedRoute>} />
          <Route path='/catalog' element={<ProtectedRoute><Catalog  />
          </ProtectedRoute>} />
          <Route path='/catalog/:id' element={<ProtectedRoute>
            <ProductPage handleClick={handleClick} />
          </ProtectedRoute>} />
          <Route path='/order' element={<ProtectedRoute><Order cart={cart}  />
          </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
