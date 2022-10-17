import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Favourite.scss'
import switcher from '../../ASSETS/switcher.svg'
import Footer from '../../COMPONENTS/FOOTER/Footer'
import like from '../../ASSETS/like.svg'
import liked from '../../ASSETS/liked.svg'

const Favourite = ({ favourite }) => {
    console.log("FAVOURITE", favourite);
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false)
    const liking = () => {
        setToggle(toggle => !toggle)
      }
      let is = toggle ? liked : like

      useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
  return (
    <div className='favourite'>
        <div className='switcher'>
          <Link to='/'>Главная</Link>
          <img src={switcher} alt='' />
          <Link>Избранное</Link>
        </div>
        <div className='wrapping'>
           {favourite.length === 0 ? (
            <h1 className='empty-favourite'>ВАШЕ ИЗБРАННОЕ ПУСТУЕТ... </h1>
           ) : (
            favourite.map(item => (
                <div className='favourites' onClick={() => navigate(`/catalog/${item.id}`)} >
                   <div className='img'>
                      <img src={item.imgs[0].imgBig} alt=''/>
                      <img className='like' src={is} alt=''/>
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
              ))
           )}
         </div>
        <Footer />
    </div>
  )
}

export default Favourite