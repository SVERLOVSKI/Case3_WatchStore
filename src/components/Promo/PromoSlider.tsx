import { useState } from 'react';
import './PromoSlider.css'
import React from 'react';

interface PromoSliderProps {
    images: string[]
}

const PromoSlider:React.FC<PromoSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <button className="slider-button" onClick={prevSlide}>
                &#10094;
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
            <button className="slider-button" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default PromoSlider