import React, { useState, useEffect } from 'react'
import './ItemCard.css'
import DeleteIcon from './CloseOutlined.svg'
import type { Cart, AddedProduct } from '../../pages/cart/cart'

interface ItemCardProps {
  id:number 
  ItemPhoto:string
  ItemName:string
  ItemDescription:string
  ItemPrice:number
  cart:Cart
  setCart: ([]) => void
}

const ItemCard:React.FC<ItemCardProps> = ({id, ItemPhoto, ItemName, ItemDescription, ItemPrice, cart, setCart}) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("cart")

    if (data) {
      const parsedData = JSON.parse(data);
      const itemIndex = parsedData.find((item:AddedProduct) => item.id === id)

      if (itemIndex) {
        setIsInCart(itemIndex.isInCart);
      }
    }
  }, []) // достаем isInCart из LocalStorage

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

      // console.log(`Элемент с ID ${id} был обновлён. Текущее состояние:`, storedItems);
    } else {
      // console.log(`Элемент с ID ${id} не найден.`);
      null;
    }
  } // вспомогательная функция, удаляет данные из cart в localStorage

  function addToCart(id:number) {
    setIsInCart(true);

    setCart([
      ...cart,
      {
        id: id,
        name: ItemName,
        photo: ItemPhoto,
        price: ItemPrice,
        count: 1,
        isInCart: true
      }
    ])
  }

  function removeCart(id:number) {
    deleteFromStorageCart(id)
    setIsInCart(!isInCart);
  };

  return (
    <div className="card_item">
      <img className='item_photo' src={ItemPhoto} alt="" />
      <p className="item_name">{ItemName}</p>
      <p className="item_description">{ItemDescription}</p>
      <div className="card_interface">
        <p className="item_price">Цена:<br /> {ItemPrice}p.</p>
        {!isInCart ? (<button onClick={() => {addToCart(id)}} className="buy_button">Купить</button>) : (
          <div className='info_bar'>
            <p className='item_info'>В корзине</p>
          </div>
        )
        }
        {isInCart ? <button onClick={() => {removeCart(id)}} className='delete-item_button'><img className='delete-item_icon' src={DeleteIcon} alt="" /></button> : null}
      </div>
    </div>
  )
}

export default ItemCard