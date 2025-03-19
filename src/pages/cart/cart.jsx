import { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import CartItem from '../../components/CartItem/CartItem';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import Menu from '../../components/Menu/Menu'
import './cart.css'

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [formStatus, setFormStatus] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false)

  useEffect(() => {
    // Получаем данные из localStorage при монтировании компонента
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Функция для обновления массива в localStorage
  const updateItemsCount = (id, count) => {
    const itemsCount = JSON.parse(localStorage.getItem('cart'));
    const existingItemIndex = itemsCount.findIndex(item => item.id === id);

    if (existingItemIndex > -1) {
      // Если товар уже есть, обновляем его count
      itemsCount[existingItemIndex].count = count;
    } else {
      // Если товара нет, добавляем новый объект
      null;
    }

    localStorage.setItem('cart', JSON.stringify(itemsCount));
  };

  function deleteFromStorageCart(id) {
    setCart(
      [
        ...cart.filter(item => item.id !== id)
      ]
    );

    let storedItems = JSON.parse(localStorage.getItem('cart'));
    const itemIndex = storedItems.findIndex(item => item.id === id);

    if (itemIndex !== -1) {

      storedItems.splice(itemIndex, 1); // Удаляем элемент из массива
      localStorage.setItem('cart', JSON.stringify(storedItems));

      console.log(`Элемент с ID ${id} был обновлён. Текущее состояние:`, storedItems);
    } else {
      console.log(`Элемент с ID ${id} не найден.`);
      null;
    }
  } // вспомогательная функция, удаляет данные по товару из cart в localStorage


  function closeForm() {
    setFormStatus(false);
  }

  function openform() {
  setFormStatus(true);
  }

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
          {cart.length > 0 ? (<>
            {cart.map(item => {
              return (
                <Fragment key={item.id}>
                  <CartItem
                    photo={item.photo}
                    price={item.price}
                    name={item.name}
                    item={item}
                    updateItemsCount={updateItemsCount}
                    deleteFromStorageCart={deleteFromStorageCart}
                  />
                </Fragment>
              )
            })}
            <button onClick={openform} className='cart-buy_button'>Оформить заказ</button>
            <DeliveryForm
              closeForm={closeForm}
              formStatus={formStatus}
              setFormStatus={setFormStatus} />
          </>) : (
            <div className="empty-cart_info">
              <p className="empty-cart_text">Ваша корзина пуста :(</p>
            </div>)}
        </div>
      </main>
    </>
  )
}