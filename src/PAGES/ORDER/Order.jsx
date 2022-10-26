import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.scss";
import switcher from "../../ASSETS/switcher.svg";
import Footer from "../../COMPONENTS/FOOTER/Footer";
import CartSize from "../../COMPONENTS/CartSize";
import trash from "../../ASSETS/trash.svg";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { v4 as uuid } from "uuid";

const Order = ({ cart, setCart, handleChange, size, handleFavourite }) => {

  // ADD TO CHART // REMOVE // CALCULATIONS
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  // CALCULATING THE TOTAL PRICE 
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  }, []);

  console.log("CART", cart);

  // SUBMIT
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");
  const [mail, setMail] = useState("");
  const anOrder = collection(db, "orders");
  let id = uuid();
  
  // TRANSERING THE DATA TO DATABASE 
  const handleSubmit = async (e) => {
    e.preventDefault();

    await setDoc(doc(anOrder, id), {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      town: town,
      mail: mail,
      cart: cart,
    })
      .then(() => {
        alert("ЗАКАЗАН");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setTown("");
    setMail("");
  };

  return (
    <div className="order">
      <div className="switcher">
        <Link to="/">Главная</Link>
        <img src={switcher} alt="" />
        <Link>Корзина</Link>
      </div>
      <h2>Ваш заказ</h2>
      {cart.length === 0 ? (
        <h6 className="empty-cart">ВАША КОРЗИНА ПУСТА... ☹</h6>
      ) : (
        cart.map((item) => (
          <div>
            <div className="cartProduct">
              <div className="imag">
                <img src={item.imgs[0].img} alt="" />
                <div>
                  <h4>{item.id}</h4>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div className="color">
                <div
                  style={{ backgroundColor: `${item.colors[2].name}` }}
                ></div>
              </div>
              <div className="size" style={{ zIndex: "1000" }}>
                <CartSize />
              </div>
              <div className="count">
                <div onClick={() => handleChange(item, -1)} className="add">
                  -
                </div>
                <h5>{item.amount}</h5>
                <div onClick={() => handleChange(item, 1)} className="add plus">
                  +
                </div>
              </div>
              <div className="price">
                <h3>{item.price} грн</h3>
                <img onClick={() => handleRemove(item.id)} src={trash} alt="" />
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="itogo">
          К оплате: <span>{price} грн</span>
        </div>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Оформление заказа</h1>
        <div className="inputs">
          <h2>Персональные данные:</h2>
          <div className="four-inputs">
            <input
              required
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Ваше фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Ваш e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="number"
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <h2 className="dostavka">Способ доставки:</h2>
          <div className="two-inputs">
            <input
              required
              type="text"
              placeholder="Город"
              value={town}
              onChange={(e) => setTown(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Отделение почты"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <div className="ordering">
          <h6>
            ДОСТАВКА: <span>По тарифам перевозчика</span>
          </h6>
          <h6>
            ИТОГО: <span>{price} грн</span>
          </h6>
          <button type="submit">ОФОРМИТЬ ЗАКАЗ</button>
          <p>
            Нажимая на кнопку «оплатить заказ», я принимаю условия публичной
            оферты и политики конфиденциальности
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Order;
