import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Deshboard from './Component/Deshboard/Deshboard'
import Product from './Component/All-Product/Product'
import User from './Component/User/User'
import About from './Component/About/About'
import Sidebar from './Component/Sidebar/Sidebar'
function App() {
 

  return (
    <BrowserRouter>
    <Sidebar> 
        <Routes>
          <Route path="/"  element={<Deshboard> </Deshboard>}>  </Route>
          <Route path="/deshboard"  element={<Deshboard> </Deshboard>}></Route>
          <Route path="/product"  element={<Product></Product>}>  </Route>
          <Route path="/user"  element={<User></User>}>  </Route>
          <Route path="/about"  element={<About> </About>}>  </Route>       
        </Routes>
       </Sidebar>
    </BrowserRouter>
  )
}

export default App 
