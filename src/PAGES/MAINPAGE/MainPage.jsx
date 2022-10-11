import React, { useEffect, useState } from 'react'
import './MainPage.scss'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../COMPONENTS/FOOTER/Footer';


const MainPage = ({ size }) => {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const bigScreen = useMediaQuery({ query: '(max-width: 1171px)' })

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://kara-balta.p.rapidapi.com/products',
      headers: {
        'X-RapidAPI-Key': '3a51998120msh0c0766059662c27p13690cjsn79a06260df4d',
        'X-RapidAPI-Host': 'kara-balta.p.rapidapi.com'
      }
    };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setData(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}, [])




  return (
    <div className='wrapper-all'>
        <div className='first-container'>
        <Navbar size={size} />
          <div className='after-navbar'>
            <h1>Новая Коллекция</h1>
            <div></div>
            <Link>Смотреть новинки</Link>
          </div>
        </div>
        <div className='second-container'>
             <h1>Категории</h1>
            <div className='swiper'>
              <Swiper
              modules={[Navigation, EffectFade]}
              navigation
              effect
              speed={800}
              slidesPerView={bigScreen ? 2 : 4}
              className='swiper-slide'
              >
                  {data.map((item) => (
                  <SwiperSlide className='swiper-center'>
                    <img onClick={() => navigate(`catalog/${item.id}`)} src={item.imgs[0].img} alt=''/>
                    <div>
                      <h3 onClick={() => navigate(`${item.id}`)}>{item.title}</h3>
                    </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
        </div>

        <div className='third-container'>
          <h1>Узнайте первым о новинках</h1>
          <div className='subscription'>
             <input type='email' placeholder='Ваш e-mail'/>
                <button onClick={click => {
                  if(click) {
                    alert('Вы Успешно Подписаны!')
                  }
                }}>ПОДПИСАТЬСЯ</button>
              <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
          </div>
        </div>

        <div className='footer'>
          <Footer />
        </div>
    </div>
  )
}

export default MainPage