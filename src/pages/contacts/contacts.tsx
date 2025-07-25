import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import './contacts.css'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import ContactsIcon from './PhoneOutlined.svg'
import StoreIcon from './Store.svg'


export default function Contacts() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)

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
        <div className="main_container">
          <section className='contacts'>
            <div className="contacts_bar">
              <div className="contacts_title">
                <img className='bar_logo' src={ContactsIcon} alt="" width={24} />
                <h2 className="subtitle">Контакты</h2>
              </div>
              <p className="online-list_subtitle">С нами можно связаться следующими способами:</p>
              <a className='phone_number' href="tel:+79999999999">+7 999 999 99 99</a>
              <a className='email_adress' href="mailto:example@example.com">support@testshop.ru</a>
            </div>
            <div className="store_bar">
              <div className="store_title">
                <img className='bar_logo' src={StoreIcon} alt="" width={24} />
                <h2 className="subtitle">Адреса наших магазинов</h2>
              </div>
              <p className="main_shop">г. Санкт-Петербург, ул. Литейный проспект, 64/78</p>
              <p className="main_shop">г. Санкт-Петербург, ул. Ленина, 18/49</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}