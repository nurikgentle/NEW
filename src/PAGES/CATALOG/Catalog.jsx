import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import './Catalog.scss'
import switcher from '../../ASSETS/switcher.svg'
import Size from '../../COMPONENTS/Size'
import Color from '../../COMPONENTS/Color'
import Price from '../../COMPONENTS/Price'
import SortBy from '../../COMPONENTS/SortBy'
import { AuthContext } from '../../CONTEXT/AuthContext'
import like from '../../ASSETS/like.svg'
import liked from '../../ASSETS/liked.svg'

const Catalog = () => {

  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const {data} = useContext(AuthContext)
  console.log(data);

  
  const liking = () => {
    setToggle(toggle => !toggle)
  }
  let is = toggle ? liked : like


  return (
    <div className='catalog'>
        {/* <Navbar /> */}
        <div className='switcher'>
          <Link to='/'>Главная</Link>
          <img src={switcher} alt='' />
          <Link>Каталог</Link>
        </div>
        <div className='inside-catalog'>
           <div className='sidebar'>
              <h2>Каталог</h2>
              <Link>New</Link>
              <Link>Bestsellers</Link>
              <Link>Верхняя одежда</Link>
              <Link>Шубы</Link>
              <Link>Тренчи</Link>
              <Link>Пальто</Link>
              <Link>Пуховики и жилеты</Link>
              <Link>Костюмы</Link>
              <Link>Жакеты</Link>
              <Link>Платья</Link>
              <Link>Рубашки и блузы</Link>
              <Link>Юбки</Link>
              <Link>Футболки и топы</Link>
              <Link>Аксессуары</Link>
              <Link>Sale</Link>
              <Link>Summer</Link>
              <Link>Посмотреть все</Link>
           </div>
           <div className='all-products'>
              <div className='dropdowns'>
                <Size />
                <Color />
                <Price />
                <SortBy />
              </div>
              <div className='products'>
                  {data.map(item => (
                    <div onClick={() => navigate(`${item.id}`)} className='product'>
                       <div className='img'>
                          <img src={item.imgs[0].imgBig} alt=''/>
                          <img onClick={liking} className='like' src={is} alt=''/>
                       </div>
                       <div className='information'>
                          <h4>{item.title}</h4>
                          <h3>{item.price} грн</h3>
                          <h5>{item.sizes[0].size} {item.sizes[1].size} {item.sizes[2].size}</h5>
                          <div className='colors'>
                              <div style={{ backgroundColor: `${item.colors[0].name}` }} className='a'></div>
                              <div style={{ backgroundColor: `${item.colors[1].name}` }} className='b'></div>
                              <div style={{ backgroundColor: `${item.colors[2].name}` }} className='c'></div>
                          </div>
                       </div>
                    </div>
                  ))}
              </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default Catalog