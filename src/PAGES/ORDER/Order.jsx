import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Order.scss'
import switcher from '../../ASSETS/switcher.svg'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import Footer from '../../COMPONENTS/FOOTER/Footer';
import CartSize from '../../COMPONENTS/CartSize'
import trash from '../../ASSETS/trash.svg'

const Order = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
        handlePrice();
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans)
    }
    useEffect(() => {
        handlePrice()
    }, [])

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
            <h6 className='empty-cart'>ВАША КОРЗИНА ПУСТА... ☹</h6>
        ) : (
            cart.map(item => (
                <div>
                <div className='cartProduct'>
                    <div className='imag'>
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
                        <div onClick={() => handleChange(item, -1)} className='add'>-</div>
                        <h5>{item.amount}</h5>
                        <div onClick={() => handleChange(item, 1)} className='add plus'>+</div>
                    </div>
                    <div className='price'>
                        <h3>{item.price} грн</h3>
                        <img onClick={() => handleRemove(item.id)} src={trash} alt=''/>
                    </div>
                </div>
                <hr />
                </div>

            ))
        )}
        {cart.length > 0 && <div className='itogo'>К оплате: <span>{price} грн</span></div>}
        <Footer />
    </div>
  )
}

export default Order