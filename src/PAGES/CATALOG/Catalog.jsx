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
  const {data, setData} = useContext(AuthContext)
  console.log(data);

  
  const liking = () => {
    setToggle(toggle => !toggle)
  }
  let is = toggle ? liked : like

  //SORTING DATA
  const sortByExpensive = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price)
    console.log("SIZE");
    console.log("SORTED", sorted);
    setData(sorted);
  }
  const sortByCheap = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price)
    console.log("SIZE");
    console.log("SORTED", sorted);
    setData(sorted);
  }
  const sortByPopularity = () => {
    const sorted = [...data].sort((a, b) => a.id > b.id && -1)
    console.log("SIZE");
    console.log("SORTED", sorted);
    setData(sorted);
  }
  const sortByAlphabet = (col) => {
    const sorted = [...data].sort((a, b) => 
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    )
    console.log("SIZE");
    console.log("SORTED", sorted);
    setData(sorted);
  }
  const sortBySize = (col) => {
    const sorted = [...data].sort((a, b) => 
    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    )
    console.log("SIZE");
    console.log("SORTED", sorted);
    setData(sorted);
  }


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
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>New</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Bestsellers</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Верхняя одежда</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Шубы</Link>
              <Link>Тренчи</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Пальто</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Пуховики и жилеты</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Костюмы</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Жакеты</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Платья</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Рубашки и блузы</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Юбки</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Футболки и топы</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Аксессуары</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Sale</Link>
              <Link>Summer</Link>
              <Link onClick={() => alert('ЭТИХ ТОВАРОВ НЕТ 😭')}>Посмотреть все</Link>
           </div>
           <div className='all-products'>
              <div className='dropdowns'>
                <Size sortByExpensive={sortByExpensive} sortByAlphabet={sortByAlphabet} sortBySize={sortBySize} />
                <Color sortByCheap={sortByCheap} sortByAlphabet={sortByAlphabet} />
                <Price sortByExpensive={sortByExpensive} sortByCheap={sortByCheap}  sortByPopularity={sortByPopularity}/>
                <SortBy sortByExpensive={sortByExpensive} sortByAlphabet={sortByAlphabet} sortBySize={sortBySize} />
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