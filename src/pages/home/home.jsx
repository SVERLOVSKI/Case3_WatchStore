import React, { useState, createContext, useContext } from 'react'
import Header from '../../components/Header/Header'
import Promo from '../../components/Promo/Promo'
import Catalog from '../../components/Catalog/Catalog'
import FilterBar from '../../components/FilterBar/FilterBar'
import Data from '../../components/Catalog/data/data'
import Menu from '../../components/Menu/Menu'

export const FiltersContext = createContext(null);

export default function Home() {
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [inStock, setInStock] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(Data);
  const [visibleMenu, setVisibleMenu] = useState(false)

  const handleFilter = () => {
    let filtered = Data;

    if (brand) {
      filtered = filtered.filter(product => product.brand === brand);
    }

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }

    if (inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    setFilteredProducts(filtered);
  };

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
          <Promo />
          <FiltersContext.Provider value={[brand, setBrand, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock, handleFilter]}>
            <FilterBar />
          </FiltersContext.Provider>
          <Catalog
          ProductList={filteredProducts} />
        </div>
      </main>
    </>
  )
}