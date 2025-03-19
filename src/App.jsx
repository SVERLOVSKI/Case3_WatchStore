import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

import Home from './pages/home/home'
import Contacts from './pages/contacts/contacts'
import Delivery from './pages/delivery/delivery'
import Cart from './pages/cart/cart';

function App() {

  return (
    <>
    <Router basename='/Case3_WatchStore'>
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
    </>
  )
}

export default App
