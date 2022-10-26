import SignUp from "./PAGES/SIGN UP/SignUp";
import "./App.scss";
import SignIn from "./PAGES/SIGN IN/SignIn";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./PAGES/MAINPAGE/MainPage";
import { useContext, useState } from "react";
import { AuthContext } from "./CONTEXT/AuthContext";
import Catalog from "./PAGES/CATALOG/Catalog";
import ProductPage from "./PAGES/PRODUCT-PAGE/ProductPage";
import Order from "./PAGES/ORDER/Order";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Favourite from "./PAGES/FAVOURITE/Favourite";
import Contacts from "./PAGES/CONTACTS/Contacts";
import Exchange from "./PAGES/EXCHANGE/Exchange";
import Delivery from "./PAGES/DELIVERY/Delivery";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  const [cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const handleClick = (data) => {
    cart.push(data);
    setCart([...cart]);
  };
  const handleFavourite = (data) => {
    favourite.push(data);
    setFavourite([...favourite]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        size={cart.length}
        sizes={favourite.length}
      />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage size={cart.length} sizes={favourite.length} />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <Catalog
                search={search}
                setSearch={setSearch}
                handleFavourite={handleFavourite}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/catalog/:id"
          element={
            <ProtectedRoute>
              <ProductPage
                handleClick={handleClick}
                handleFavourite={handleFavourite}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order
                handleChange={handleChange}
                cart={cart}
                size={cart.length}
                setCart={setCart}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favourite"
          element={
            <ProtectedRoute>
              <Favourite favourite={favourite} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <Contacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exchange"
          element={
            <ProtectedRoute>
              <Exchange />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery"
          element={
            <ProtectedRoute>
              <Delivery />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
