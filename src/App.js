import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main"
import Inventory from "./Pages/Inventory"
import Prices from "./Pages/Prices"
import "./App.css";
import Nav from "./Components/nav"
import Cart from "./Pages/Cart"


function App () {
    //use the route component to specify each route
  return (
    <div className='App'>
      <Nav />
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/prices' element={<Prices/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
  
    </div>
    
  );
};

export default App;