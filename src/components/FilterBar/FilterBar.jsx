import React, { useContext } from 'react'
import './FilterBar.css'
import { FiltersContext } from './../../pages/home/home'

export default function FilterBar() {
    const [brand, setBrand, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock, handleFilter] = useContext(FiltersContext)
    return (
        <section className="filter">
            <div className="filter_container">
                <h2 className='filter_title'>Фильтры</h2>
                <div className="filter_list">
                    <div className="another_filters">
                    <label className='availability_label'>
                            В наличии:
                            <input
                                checked={inStock}
                                onChange={(e) => setInStock(e.target.checked)}
                                className='availability_checkbox'
                                type="checkbox"
                                name="inStock"
                            />
                        </label>
                        <label>
                            Бренд:
                            <select onChange={(e) => setBrand(e.target.value)} className='brand_select' name="brand">
                                <option value="">Все</option>
                                <option value="Casio">Casio</option>
                                <option value="Lee Cooper">Lee Cooper</option>
                            </select>
                        </label>
                    </div>

                    <div className="price_filter">
                        <label>
                            Минимальная цена:
                            <input
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className='minprice_input'
                                type="number"
                                name="minPrice"
                                placeholder="0"
                            />
                        </label>

                        <label>
                            Максимальная цена:
                            <input
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className='maxprice_input'
                                type="number"
                                name="maxPrice"
                                placeholder="1000"
                            />
                        </label>
                    </div>
                    <button className='filters_button' onClick={handleFilter}>Применить</button>
                </div>
            </div>
        </section>
    )
}
