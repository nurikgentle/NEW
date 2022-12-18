import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useMediaQuery } from "react-responsive";
import Footer from "../../COMPONENTS/FOOTER/Footer";

const MainPage = ({ size, sizes }) => {
  // THE DATA
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // RESPONSIVENESS THROUGH USEMEDIAQUERY
  const bigScreen = useMediaQuery({ query: "(max-width: 1171px)" });

  // A REQUEST TO THE SERVER
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("https://6398cfde29930e2bb3c2bb4f.mockapi.io/w/data");
        setData(result.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper-all">
      <div className="first-container">
        <div className="after-navbar">
          <h1>Новая Коллекция</h1>
          <div></div>
          <Link>Смотреть новинки</Link>
        </div>
      </div>
      <div className="second-container">
        <h1>Категории</h1>
        <div className="swiper">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={bigScreen ? 2 : 4}
            className="swiper-slide"
          >
            {data.map((item) => (
              <SwiperSlide className="swiper-center">
                <img
                  onClick={() => navigate(`catalog/${item.id}`)}
                  src={item.imgs[0].img}
                  alt=""
                />
                <div>
                  <h3 onClick={() => navigate(`${item.id}`)}>{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="third-container">
        <h1>Узнайте первым о новинках</h1>
        <form className="subscription">
          <input required type="email" placeholder="Ваш e-mail" />
          <button
            type="submit"
            onClick={() => alert("ВЫ УСПЕШНО ПОДПИСАНЫ 😎")}
          >
            ПОДПИСАТЬСЯ
          </button>
          <p>
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
          </p>
        </form>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
