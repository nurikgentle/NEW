import SignUp from './PAGES/SIGN UP/SignUp';
import "./App.scss"
import SignIn from './PAGES/SIGN IN/SignIn'
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './PAGES/MAINPAGE/MainPage'
import { useContext } from 'react';
import { AuthContext } from './CONTEXT/AuthContext'
import Catalog from './PAGES/CATALOG/Catalog';

function App() {
  const {currentUser} = useContext(AuthContext)
 
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/signin' />
    } 

    return children
  }

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<ProtectedRoute>
            <MainPage />
          </ProtectedRoute>} />
          <Route path='/catalog' element={<ProtectedRoute>
            <Catalog />
          </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
