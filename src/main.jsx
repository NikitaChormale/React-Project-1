import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from "./views/Home"
import Vegtable from './views/Vegtable';
import Mycart from './views/mycart';
import Callus from './views/callus';

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vegtable" element={<Vegtable />} />
      <Route path='/my-cart' element={<Mycart />} />
      <Route path='/callus' element={<Callus/>} />
    </Routes>

  </BrowserRouter>
)
