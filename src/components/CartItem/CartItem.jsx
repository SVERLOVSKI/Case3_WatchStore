import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import DecreaseIcon from './MinusSquareOutlined.svg'
import IncreaseIcon from './PlusSquareOutlined.svg'

export default function CartItem({photo, name, price, item, updateItemsCount, deleteFromStorageCart}) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // Считываем count из localStorage при монтировании компонента
        const itemsCount = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = itemsCount.find(i => i.id === item.id);
        if (existingItem) {
            setCount(existingItem.count);
        }
    }, [item.id]);

    const increaseCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateItemsCount(item.id, newCount);
    };

    const decreaseCount = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateItemsCount(item.id, newCount);
        } else {
            deleteFromStorageCart(item.id)
        }
    };

    return (
        <div className="cart_item">
            <div className="cart_info">
                <img src={photo} alt="" className="item-cart_photo" />
                <p className="item-cart_name">{name}</p>
            </div>
            <div className="cart_info_bar">
                <div className="count">
                    <button onClick={() => { decreaseCount(item.id) }} className='decrease-count_button'><img src={DecreaseIcon} width={20} alt="" /></button>
                    <p className='item-cart_value'>{count}</p>
                    <button onClick={increaseCount} className='increase-count_button'><img src={IncreaseIcon} width={20} alt="" /></button>
                </div>
                <p className="item-cart_price">{price * count} р.</p>
            </div>
        </div>
    )
}
