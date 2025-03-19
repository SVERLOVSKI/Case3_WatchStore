import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import './contacts.css'
import Menu from '../../components/Menu/Menu'


export default function Contacts() {
  const [visibleMenu, setVisibleMenu] = useState(false)

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
            <div className="contacts_container">
              <article className='contacts_article'>
                <h2 className="contacts_title">Контакты</h2>
                <div className="contact_list">
                  <div className="online_list">
                    <p className="online-list_subtitle">С нами можно связаться следующими способами:</p>
                    <a className='phone_number' href="tel:+79999999999">+7 999 999 99 99</a>
                    <a className='email_adress' href="mailto:example@example.com">support@testshop.ru</a>
                  </div>
                  <div className="offline_list">
                    <p className="offline-list_subtitle">Адреса наших магазинов:</p>
                    <p className="main_shop">г. Санкт-Петербург, ул. Литейный проспект, 64/78</p>
                    <p className="main_shop">г. Санкт-Петербург, ул. Ленина, 18/49</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
