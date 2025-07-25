import { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import CartItem from '../../components/CartItem/CartItem';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router';
import './cart.css'
import React from 'react';

export interface AddedProduct {
  count:number
  id:number
  isInCart:boolean
  name:string
  photo:string
  price:number
}

export type Cart = AddedProduct[]

export default function Cart() {
  const [cart, setCart] = useState<Cart>([]);
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0)

  useEffect(() => {
    // Получаем данные из localStorage при монтировании компонента
    const storedCart = JSON.parse(localStorage.getItem('cart') as unknown as string) || [];
    setCart(storedCart);

    const total = storedCart.reduce((acc:number, item:AddedProduct) => {
      return acc + item.price * item.count;
    }, 0);
    setTotalCost(total)
  }, []);

  function updateTotalCost() {
    const storedCart = JSON.parse(localStorage.getItem('cart') as unknown as string) || [];

    const total = storedCart.reduce((acc:number, item:AddedProduct) => {
      return acc + item.price * item.count;
    }, 0);
    setTotalCost(total)
  }

  // Функция для обновления массива в localStorage
  const updateItemsCount = (id:number, count:number) => {
    const itemsCount = JSON.parse(localStorage.getItem('cart') as unknown as string);
    const existingItemIndex = itemsCount.findIndex((item:AddedProduct) => item.id === id);

    if (existingItemIndex > -1) {
      // Если товар уже есть, обновляем его count
      itemsCount[existingItemIndex].count = count;
    } else {
      // Если товара нет, добавляем новый объект
      null;
    }

    localStorage.setItem('cart', JSON.stringify(itemsCount));
  };

  function deleteFromStorageCart(id:number) {
    setCart(
      [
        ...cart.filter(item => item.id !== id)
      ]
    );

    let storedItems = JSON.parse(localStorage.getItem('cart') as unknown as string);
    const itemIndex = storedItems.findIndex((item:AddedProduct) => item.id === id);

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
          {cart.length > 0 ? (<section className='cart_list'>
            <h2 className='cart_title'>Корзина</h2>
            {cart.map(item => {
              return (
                <Fragment key={item.id}>
                  <CartItem
                    photo={item.photo}
                    price={item.price}
                    name={item.name}
                    item={item}
                    updateItemsCount={updateItemsCount}
                    updateTotalCost={updateTotalCost}
                    deleteFromStorageCart={deleteFromStorageCart}
                  />
                </Fragment>
              )
            })}
            <div className="total-cost">
              <p className="cost">Итоговая стоимость -  {totalCost} р.</p>
              <p className="cost-information">Стоимость доставки рассчитывается менеджером</p>
            </div>
            <button onClick={openform} className='cart-buy_button'>Оформить заказ</button>
            <DeliveryForm
              closeForm={closeForm}
              formStatus={formStatus}
              setFormStatus={setFormStatus} />
          </section>) : (
            <div className="empty-cart_info">
              <p className="empty-cart_text">Ваша корзина пуста</p>
              <NavLink to="/" className='cart_button'>
                В каталог
              </NavLink>
            </div>)}
        </div>
      </main>
      <Footer />
    </>
  )
}