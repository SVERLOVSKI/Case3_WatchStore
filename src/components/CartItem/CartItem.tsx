import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import DecreaseIcon from './MinusSquareOutlined.svg'
import IncreaseIcon from './PlusSquareOutlined.svg'
import { AddedProduct } from '../../pages/cart/cart'


interface CartItemProps {
    photo:string
    name:string
    price:number
    item: AddedProduct
    updateItemsCount: (id: number, count: number) => void
    updateTotalCost: () => void
    deleteFromStorageCart: (id: number) => void
}

const CartItem:React.FC<CartItemProps> = ({photo, name, price, item, updateItemsCount, updateTotalCost, deleteFromStorageCart}) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // Считываем count из localStorage при монтировании компонента
        const itemsCount = JSON.parse(localStorage.getItem('cart') as unknown as string) || [];
        const existingItem = itemsCount.find((i:AddedProduct) => i.id === item.id);
        if (existingItem) {
            setCount(existingItem.count);
        }
    }, [item.id]);

    const increaseCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateItemsCount(item.id, newCount);
        updateTotalCost()
    };

    const decreaseCount = (id:number) => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateItemsCount(item.id, newCount);
            updateTotalCost()
        } else {
            deleteFromStorageCart(item.id)
            updateTotalCost()
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

export default CartItem