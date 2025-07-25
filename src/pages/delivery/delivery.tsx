import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import './delivery.css'
import DeliveryLogo from './DeliveryTruck.svg'
import PaymentLogo from './Money.svg'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'


export default function Delivery() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  function handleChangeVisibleMenu() {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <>
      <Header
        onClick={handleChangeVisibleMenu} />
      <Menu
        visibleMenu={visibleMenu}
        onClick={handleChangeVisibleMenu}
      />
      <main className="main">
        <div className="delivery_container">
          <section className="delivery">
            <div className="delivery_bar">
              <div className="delivery_title">
                <img className='bar_logo' src={DeliveryLogo} alt="" width={24} />
                <h2 className="subtitle">Стандартная доставка - от 4 дней</h2>
              </div>
              <p className="delivery_information">Стоимость доставки 2500 ₽.</p>
              <p className="delivery_information">При заказе от 15 000 ₽ — бесплатно.</p>
            </div>
            <div className="payment_bar">
              <div className="payment_title">
                <img className='bar_logo' src={PaymentLogo} alt="" />
                <h2 className="subtitle">Оплатить можно удобным для вас способом</h2>
              </div>
              <p className="payment_information">Вы можете забронировать нужный вам товар в любом магазине</p>
              <p className="payment_information">Онлайн банковской картой или через СБП</p>
              <p className="payment_information">Наличными или картой в магазине</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
