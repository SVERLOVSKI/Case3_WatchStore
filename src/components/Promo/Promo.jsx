import React from 'react'
import './Promo.css'
import PromoImg from './PromoImg.png'

export default function Promo() {
    return (
        <div className="promo_container">
            <section className='promo'>
                <div className="promo_information">
                    <div className="promo_text">
                        <h1 className="promo_title">Мировые бренды<br /> в твоем образе</h1>
                        <a className='promo_link' href="">В каталог</a>
                    </div>
                    <img className='promo_image' src={PromoImg} alt="" />
                </div>
            </section>
        </div>
    )
}
