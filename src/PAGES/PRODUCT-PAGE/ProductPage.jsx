import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../COMPONENTS/FOOTER/Footer";
import "./ProductPage.scss";
import switcher from "../../ASSETS/switcher.svg";
import axios from "axios";
import a from "../../ASSETS/a.jpg";
import b from "../../ASSETS/b.jpg";
import c from "../../ASSETS/c.jpg";
import d from "../../ASSETS/d.jpg";
import f from "../../ASSETS/f.jpg";
import SelectSize from "../../COMPONENTS/SelectSize";
import vector from "../../ASSETS/vectorGrey.svg";
import { AuthContext } from "../../CONTEXT/AuthContext";
import liked from "../../ASSETS/liked.svg";

const ProductPage = ({ handleClick, handleFavourite }) => {

  // CHANGING THE STATES   
  const [toggle, setToggle] = useState(false);
  const { products } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  let down = open ? "reverse" : null;
  const { id } = useParams();
  const [data, setData] = useState();
  console.log("ID", data);

  // LIKING THE PRODUCT 
  const liking = () => {
    setToggle((toggle) => !toggle);
  };
  let is = toggle ? liked : liked;

  // USEEFFECT FETCHING THE DATA
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://kara-balta.p.rapidapi.com/products/${id}`,
      headers: {
        "X-RapidAPI-Key": "3a51998120msh0c0766059662c27p13690cjsn79a06260df4d",
        "X-RapidAPI-Host": "kara-balta.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productpage">
      <div className="switcher">
        <Link to="/">Главная</Link>
        <img src={switcher} alt="" />
        <Link to="/catalog">Каталог</Link>
        <img className="title-img" src={switcher} alt="" />
        <Link className="title">{data?.title}</Link>
      </div>
      <div className="about-product">
        <div className="image">
          <div className="images">
            <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={c} alt="" />
            <img src={d} alt="" />
            <img src={f} alt="" />
          </div>
          <div className="bigImage">
            <img src={data?.imgs[0]?.imgBig} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="texts">
            <h3>{data?.title}</h3>
            <h4>{data?.price} грн</h4>
            <div className="colors">
              <div
                style={{ backgroundColor: `${data?.colors[0]?.name}` }}
              ></div>
              <div
                style={{ backgroundColor: `${data?.colors[1]?.name}` }}
              ></div>
              <div
                style={{ backgroundColor: `${data?.colors[2]?.name}` }}
              ></div>
            </div>
            <h5>{data?.colors[2]?.colorDeckr}</h5>
          </div>
          <div className="addToCart">
            <div className="dropdown">
              <SelectSize />
            </div>
            <div className="buttons">
              <button onClick={() => handleClick(data)} className="a">
                В Корзину
              </button>
              <button className="b" onClick={() => handleFavourite(data)}>
                В Избранное
              </button>
            </div>
          </div>
          <div className="details">
            <div className="under-details">
              <h3>Подробности</h3>
              <h3
                className="clickable"
                onClick={() => setOpen((open) => !open)}
              >
                Состав и уход
              </h3>
            </div>
            <hr />
            <img
              onClick={() => setOpen((open) => !open)}
              className={`vectorGrey ${down}`}
              src={vector}
              alt=""
            />
            {open && (
              <div className="care">
                <div className="consistsof">
                  <h4>{data?.description[0]?.p}</h4>
                  <h4>{data?.description[1]?.p}</h4>
                  <h4>{data?.description[2]?.p}</h4>
                </div>
                <div className="dontdo">
                  <h4>- {data?.care[0]?.p}</h4>
                  <h4>- {data?.care[1]?.p}</h4>
                  <h4>- {data?.care[2]?.p}</h4>
                  <h4>- {data?.care[3]?.p}</h4>
                  <h4>- {data?.care[4]?.p}</h4>
                  <hr />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <h1 className="youlike">Вам может понравиться</h1>
      <div className="productss">
        {products.slice(1, 3).map((item) => (
          <a
            style={{ textDecoration: "none" }}
            href={item.id}
            className="product"
          >
            <div className="img">
              <img src={item.imgs[0].imgBig} alt="" />
              <img onClick={liking} className="like" src={is} alt="" />
            </div>
            <div className="information">
              <h4>{item.title}</h4>
              <h3>{item.price} грн</h3>
              <h5>
                {item.sizes[0].size} {item.sizes[1].size} {item.sizes[2].size}
              </h5>
              <div className="colors">
                <div
                  style={{ backgroundColor: `${item.colors[0].name}` }}
                  className="a"
                ></div>
                <div
                  style={{ backgroundColor: `${item.colors[1].name}` }}
                  className="b"
                ></div>
                <div
                  style={{ backgroundColor: `${item.colors[2].name}` }}
                  className="c"
                ></div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
