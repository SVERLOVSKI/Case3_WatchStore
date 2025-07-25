import React from 'react'
import PromoSlider from './PromoSlider'
import PromoImg from './PromoImg.png'
import PromoImg2 from './LC07046.530.png'
import PromoImg3 from './LC07626.399_1.png'
import './Promo.css'

const images = [PromoImg, PromoImg2, PromoImg3]

export default function Promo() {
    return (
        <div className="promo_container">
            <section className='promo'>
                <div className="promo_information">
                    <div className="promo_text">
                        <h1 className="promo_title">Найди аксессуар<br></br> подходящий под<br></br> твой образ</h1>
                        <a className='promo_link' href="#catalog">В каталог</a>
                    </div>
                    <div className="slider">
                        <PromoSlider images={images} />
                    </div>
                </div>
                <div className="promo_specs">
                    <ul className="specs_list">
                        <li className="specs_item"><span className='specs_quantity'>200+</span><br></br> брендов</li>
                        <li className="specs_item"><span className='specs_quantity'>2000+</span><br></br> товаров высокого качества</li>
                        <li className="specs_item"><span className='specs_quantity'>30 000+</span><br></br> довольных клиентов</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
