import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import instagram from '../../ASSETS/instagram.svg';
import telegram from '../../ASSETS/telegram.svg';
import { useState } from "react";
import footerVector from '../../ASSETS/footer.svg'

const Footer = () => {

  const [open, setOpen] = useState(false)
  function handleClick() {
    setOpen(open => !open)
  }
  let down = open ? 'open' : null


  const [ope, setOpe] = useState(false)
  function handleClic() {
    setOpe(ope => !ope)
  }
  let dow = ope ? 'ope' : null


  const [op, setOp] = useState(false)
  function handleCli() {
    setOp(op => !op)
  }
  let done = op ? 'op' : null

  // ANIMATIONS 

  const [rotate, setRotate] = useState(false)
  function change() {
    setRotate(rotate => !rotate)
  }
  let upSide = rotate ? 'rotate' : null


  const [rotat, setRotat] = useState(false)
  function chang() {
    setRotat(rotat => !rotat)
  }
  let upSid = rotat ? 'rotat' : null

  const [rota, setRota] = useState(false)
  function chan() {
    setRota(rota => !rota)
  }
  let upSi = rota ? 'rota' : null


  return (
    <div className='footer'>
        <footer>
          <div className='first-column'>
            <div onClick={change}>
               <h1 onClick={handleClick}>КОМПАНИЯ</h1>
            </div>
            <div onClick={change}>
            <img className={upSide} onClick={handleClick} src={footerVector} alt=''/>
            </div>
            <div className={`links ${down}`}>
              <Link to='/delivery'>О Нас</Link>
              <Link to='/contacts'>Контакты</Link>
            </div>
          </div>

            <div className='line'></div>

          <div className='second-column'>
            <div onClick={chang}>
              <h1 onClick={handleClic}>ПОЛЕЗНОЕ</h1>
            </div>
            <div onClick={chang}>
             <img className={upSid} onClick={handleClic} src={footerVector} alt=''/>
            </div>
            <div className={`links ${dow}`}>
              <Link to='/delivery'>Оплата и доставка</Link>
              <Link to='/exchange'>Условия возврата</Link>
              <Link onClick={() => alert("Ошибка Сервера")}>Бонусная система</Link>
            </div>
          </div>

          <div className='line'></div>

          <div className='third-column'>
            <div onClick={chan}>
              <h1 onClick={handleCli}>ПОКУПАТЕЛЮ</h1>
            </div>
            <div onClick={chan}>
              <img className={upSi} onClick={handleCli} src={footerVector} alt=''/>
            </div>
            <div className={`links ${done}`}>
              <Link to='/favourite'>Избранное</Link>
              <Link onClick={() => alert("Ошибка Сервера")}>Публичная оферта</Link>
              <Link onClick={() => alert("Ошибка Сервера")}>Политика конфиденциальности</Link>
            </div>
          </div>

          <div className='line'></div>

          <div className='fourth-column'>
            <h1>КОНТАКТЫ</h1>
            <div className='links'>
              <a>
                <a href='https://www.youtube.com/watch?v=qYN5_H_GgRk'><img src={instagram} alt='instagram' /></a>
                <a href='https://youtu.be/XEjLoHdbVeE'><img style={{ marginLeft: '10px' }} src={telegram} alt='telegram' /></a>
              </a>
              <p>+(996) 0558994399</p>
              <p style={{ paddingLeft: '16px' }}>info@yanki.com</p>
            </div>
          </div>
        </footer>
        <h1>© 2022 Nurik. All rights reserved</h1>
    </div>
  )
}

export default Footer