import React from "react";
import Search from "../../ASSETS/search.svg";
import User from "../../ASSETS/user.svg";
import Love from "../../ASSETS/love.svg";
import Cart from "../../ASSETS/cart.svg";
import Vector from "../../ASSETS/vector.svg";
import Hamburger from "hamburger-react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import "./Navbar.scss";
import { useState } from "react";
import searchBlack from "../../ASSETS/searchBlack.svg";
import userYellow from "../../ASSETS/userYellow.svg";
import loveYellow from "../../ASSETS/loveYellow.svg";
import cartYellow from "../../ASSETS/cartYellow.svg";
import vectorBlack from "../../ASSETS/vectorBlack.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ size, sizes, search, setSearch }) => {

  // BOOLEAN USESTATE 
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(false);

  // NAVIGATION 
  const navigate = useNavigate();

  // RENDERING THE DATA THROUGH ITS MATCHING PATH 
  const { pathname } = useLocation();
  const catalog = matchPath("/catalog", pathname);
  const productPage = matchPath("/catalog/:id", pathname);
  const order = matchPath("/order", pathname);
  const signin = matchPath("/signin", pathname);
  const signup = matchPath("/signup", pathname);
  const favourite = matchPath("/favourite", pathname);
  const contacts = matchPath("/contacts", pathname);
  const exchange = matchPath("/exchange", pathname);
  const delivery = matchPath("/delivery", pathname);

  return (
    <nav
      style={signin ? { display: "none" } : signup ? { display: "none" } : null}
    >
      <div className="first-block">
        <div
          style={
            catalog
              ? { color: "#E0BEA2" }
              : productPage
              ? { color: "#E0BEA2" }
              : order
              ? { color: "#E0BEA2" }
              : favourite
              ? { color: "#E0BEA2" }
              : contacts
              ? { color: "#E0BEA2" }
              : exchange
              ? { color: "#E0BEA2" }
              : delivery
              ? { color: "#E0BEA2" }
              : null
          }
          onClick={(e) => setIsOpen(!isOpen)}
          className="hamburger"
        >
          <Hamburger />
        </div>
        <Link
          style={
            catalog
              ? { color: "black" }
              : productPage
              ? { color: "black" }
              : order
              ? { color: "black" }
              : favourite
              ? { color: "black" }
              : contacts
              ? { color: "black" }
              : exchange
              ? { color: "black" }
              : delivery
              ? { color: "black" }
              : null
          }
          onClick={() => alert("Ошибка Сервера")}
        >
          NEW
        </Link>
        <Link
          style={
            catalog
              ? { color: "black" }
              : productPage
              ? { color: "black" }
              : order
              ? { color: "black" }
              : favourite
              ? { color: "black" }
              : contacts
              ? { color: "black" }
              : exchange
              ? { color: "black" }
              : delivery
              ? { color: "black" }
              : null
          }
          to="/catalog"
        >
          КАТАЛОГ
        </Link>
        <Link
          style={
            catalog
              ? { color: "black" }
              : productPage
              ? { color: "black" }
              : order
              ? { color: "black" }
              : favourite
              ? { color: "black" }
              : contacts
              ? { color: "black" }
              : exchange
              ? { color: "black" }
              : delivery
              ? { color: "black" }
              : null
          }
          to="/contacts"
        >
          О НАС
        </Link>
      </div>
      {isOpen && (
        <div
          style={
            catalog
              ? { backgroundColor: "#E0BEA2" }
              : productPage
              ? { backgroundColor: "#E0BEA2" }
              : order
              ? { backgroundColor: "#E0BEA2" }
              : favourite
              ? { backgroundColor: "#E0BEA2" }
              : contacts
              ? { backgroundColor: "#E0BEA2" }
              : exchange
              ? { backgroundColor: "#E0BEA2" }
              : delivery
              ? { backgroundColor: "#E0BEA2" }
              : null
          }
          className="toggle"
        >
          <Link to="/delivery">ОПЛАТА И ДОСТАВКА</Link>
          <Link to="/exchange">УСЛОВИЯ ВОЗВРАТА</Link>
          <Link to="/contacts">КОНТАКТЫ</Link>
        </div>
      )}
      <div className="second-block">
        <h1
          onClick={() => navigate("/catalog")}
          style={
            catalog
              ? { color: "#E0BEA2" }
              : productPage
              ? { color: "#E0BEA2" }
              : order
              ? { color: "#E0BEA2" }
              : favourite
              ? { color: "#E0BEA2" }
              : contacts
              ? { color: "#E0BEA2" }
              : exchange
              ? { color: "#E0BEA2" }
              : delivery
              ? { color: "#E0BEA2" }
              : null
          }
          className="h1"
        >
          YANKI
        </h1>
      </div>
      <div className="third-block">
        <div className="language">
          <p
            onClick={() => alert("Ошибка с сервером ☹")}
            style={
              catalog
                ? { color: "black" }
                : productPage
                ? { color: "black" }
                : order
                ? { color: "black" }
                : favourite
                ? { color: "black" }
                : contacts
                ? { color: "black" }
                : exchange
                ? { color: "black" }
                : delivery
                ? { color: "black" }
                : null
            }
          >
            RU
          </p>
          <img
            onClick={() => alert("Ошибка с сервером ☹")}
            src={
              catalog
                ? vectorBlack
                : productPage
                ? vectorBlack
                : order
                ? vectorBlack
                : favourite
                ? vectorBlack
                : contacts
                ? vectorBlack
                : exchange
                ? vectorBlack
                : delivery
                ? vectorBlack
                : Vector
            }
            alt=""
          />
        </div>
        <p
          onClick={() => alert("Ошибка с сервером ☹")}
          style={
            catalog
              ? { color: "black" }
              : productPage
              ? { color: "black" }
              : order
              ? { color: "black" }
              : favourite
              ? { color: "black" }
              : contacts
              ? { color: "black" }
              : exchange
              ? { color: "black" }
              : delivery
              ? { color: "black" }
              : null
          }
          className="uah"
        >
          UAH
        </p>
        <img
          onClick={() => alert("Ошибка с сервером ☹")}
          className="uah"
          style={{ left: "100px" }}
          src={
            catalog
              ? vectorBlack
              : productPage
              ? vectorBlack
              : order
              ? vectorBlack
              : favourite
              ? vectorBlack
              : contacts
              ? vectorBlack
              : exchange
              ? vectorBlack
              : delivery
              ? vectorBlack
              : Vector
          }
          alt=""
        />
      </div>
      <div className="fourth-block">
        <img
          onClick={() => setInput((input) => !input)}
          className="disappear"
          src={
            catalog
              ? searchBlack
              : productPage
              ? searchBlack
              : order
              ? searchBlack
              : favourite
              ? searchBlack
              : contacts
              ? searchBlack
              : exchange
              ? searchBlack
              : delivery
              ? searchBlack
              : Search
          }
          alt=""
        />
        {input && (
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Введите ваш запрос"
          />
        )}
        {input && (
          <svg
            onClick={() => navigate("/catalog")}
            className="svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8374 10.7933L15 13.9552L13.9552 15L10.7933 11.8374C9.61682 12.7805 8.15349 13.2935 6.64566 13.2913C2.97726 13.2913 0 10.3141 0 6.64566C0 2.97726 2.97726 0 6.64566 0C10.3141 0 13.2913 2.97726 13.2913 6.64566C13.2935 8.15349 12.7805 9.61682 11.8374 10.7933ZM10.3562 10.2454C11.2933 9.28169 11.8166 7.98988 11.8145 6.64566C11.8145 3.7895 9.50108 1.47681 6.64566 1.47681C3.7895 1.47681 1.47681 3.7895 1.47681 6.64566C1.47681 9.50108 3.7895 11.8145 6.64566 11.8145C7.98988 11.8166 9.28169 11.2933 10.2454 10.3562L10.3562 10.2454Z"
              fill="#252525"
            />
          </svg>
        )}
        <img
          className="disappear"
          onClick={() => signOut(auth)}
          src={
            catalog
              ? userYellow
              : productPage
              ? userYellow
              : order
              ? userYellow
              : favourite
              ? userYellow
              : contacts
              ? userYellow
              : exchange
              ? userYellow
              : delivery
              ? userYellow
              : User
          }
          alt=""
        />
        <img
          onClick={() => navigate("/favourite")}
          src={
            catalog
              ? loveYellow
              : productPage
              ? loveYellow
              : order
              ? loveYellow
              : favourite
              ? loveYellow
              : contacts
              ? loveYellow
              : exchange
              ? loveYellow
              : delivery
              ? loveYellow
              : Love
          }
          alt=""
        />
        <div onClick={() => navigate("/favourite")} className="numberofitemss">
          {sizes}
        </div>
        <img
          onClick={() => navigate("/order")}
          src={
            catalog
              ? cartYellow
              : productPage
              ? cartYellow
              : order
              ? cartYellow
              : favourite
              ? cartYellow
              : contacts
              ? cartYellow
              : exchange
              ? cartYellow
              : delivery
              ? cartYellow
              : Cart
          }
          alt=""
        />
        <div onClick={() => navigate("/order")} className="numberofitems">
          {size}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
