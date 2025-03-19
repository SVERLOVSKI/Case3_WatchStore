import { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import Data from './data/data'
import './Catalog.css'

export default function Catalog({ ProductList }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }); // состояние сохраняется в localStorage, отрисовка в корзине на основе этого массива

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <section className='catalog' id='catalog_id'>
      <div className="catalog_container">
        <ul className="catalog_list">
          {ProductList.map((card) => {
            return (
              <ItemCard
                key={card.id}
                id={card.id}
                ItemPhoto={card.img}
                ItemName={card.name}
                ItemDescription={card.description}
                ItemPrice={card.price}
                cart={cart}
                setCart={setCart}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}