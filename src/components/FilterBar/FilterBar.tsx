import React, {useState } from 'react'
import './FilterBar.css'
import ShowMoreIcon from './ChevronBigDown.svg'


interface FilterBarProps {
    brand:string
    setBrand:(value:string) => void
    minPrice:string
    setMinPrice:(value:string) => void
    maxPrice:string
    setMaxPrice:(value:string) => void
    inStock:boolean
    setInStock:(checked:boolean) => void
    handleFilter:() => void
}

const FilterBar:React.FC<FilterBarProps> = ({ brand, setBrand, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock, handleFilter }) => {
    const [filterVisibility, setFilterVisibility] = useState(true)

    function showFiltersToggle() {
        setFilterVisibility(!filterVisibility)
    }

    return (
        <section className="filter">
            <div className={filterVisibility ? 'filter_container_active' : 'filter_container'}>
                <h2 className='filter_title'>Фильтры</h2><img onClick={showFiltersToggle} className={filterVisibility ? 'show-more-button_hidden' : 'show-more-button'} src={ShowMoreIcon} alt="Show more button"/>
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
                            <select value={brand} onChange={(e) => setBrand(e.target.value)} className='brand_select' name="brand">
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

export default FilterBar