import React, { useState } from 'react'
import Navbar from './../components/Navbar'
import VEGTABLES_DATA from "./../data.json"
import VegtableCard from '../components/VegtableCard'
import toast,{Toaster} from 'react-hot-toast'



function Vegtable() {
const[refreshCart,SetRefreshCart]=useState(false);

  function AddToCard(item) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingCart.findIndex(
      (cardItem) => cardItem.id === item.id
    );
    if (itemIndex !== -1) {
      existingCart[itemIndex] = item;
    } else {
      existingCart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setTimeout(() => {
      SetRefreshCart(!refreshCart);
      toast.success("item added to cart");
    }, 1000);
  }
  return (
    <div>
      <Navbar refreshCart={refreshCart} />
      <div className='min-h-screen  '>
        <div className='flex flex-wrap justify-center'>
          {VEGTABLES_DATA.map((vegItem) => {
            return(
           <VegtableCard 
            key={vegItem.id}
            {...vegItem} 
            AddToCard={AddToCard} 
            />
          );
          })}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default Vegtable ;
