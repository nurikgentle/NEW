import React from 'react'
import { Link } from 'react-router-dom';
import './Order.scss'
import switcher from '../../ASSETS/switcher.svg'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import Footer from '../../COMPONENTS/FOOTER/Footer';
import CartSize from '../../COMPONENTS/CartSize'
import trash from '../../ASSETS/trash.svg'

const Order = ({ cart }) => {

    console.log("CART", cart);

  return (
    <div className='order'>
        <Navbar />
        <div className='switcher'>
          <Link to='/'>Главная</Link>
          <img src={switcher} alt='' />
          <Link>Корзина</Link>
        </div>
        <h2>Ваш заказ</h2>
        {cart.length === 0 ? (
            <h6>ВАША КОРЗИНА ПУСТА... ☹</h6>
        ) : (
            cart.map(item => (
                <div>
                <div className='cartProduct'>
                    <div className='image'>
                        <img src={item.imgs[0].img} alt=''/>
                        <div>
                            <h4>{item.id}</h4>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                    <div className='color'>
                        <div style={{ backgroundColor: `${item.colors[2].name}` }}></div>
                    </div>
                    <div className='size'>
                        <CartSize />
                    </div>
                    <div className='count'>
                        <div className='add'>-</div>
                        <h5>1</h5>
                        <div className='add plus'>+</div>
                    </div>
                    <div className='price'>
                        <h3>{item.price} грн</h3>
                        <img src={trash} alt=''/>
                    </div>
                </div>
                <hr />
                </div>
            
            ))
        )}
        <Footer />
    </div>
  )
}

export default Order