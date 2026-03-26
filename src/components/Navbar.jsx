
import { Salad as SaladIcon,
  ShoppingCart as ShoppingCartIcon
 } from 'lucide-react'
 import { useEffect, useState } from 'react';


function Navbar({refreshCart}) {
  const [cardItem ,setCardItem]= useState([]);

  useEffect(()=>{
    const existingCart= JSON.parse(localStorage.getItem("cart"))||[];
    setCardItem(existingCart);

  }, [refreshCart])
  return (
    <div className='bg-[#2E7D32] sticky top-2 max-w-10/12 mx-auto px-10 py-2
    rounded-full flex items-center justify-center gap-2 my-2 z-50'>
      <SaladIcon className='mr-2' size={60} strokeWidth={1} />
      <h2 className='text-2xl font-bold'> RTC Vegtables</h2>
      
      <div className='ml-auto relative'>
        {cardItem.length>0 ? (
      <span className=" absolute top-2 right-1 bg-red-600 text-white rounded-full px-2 text-sm">
        {cardItem.length}
        </span>
       ) : null }
      
<ShoppingCartIcon className='inline-block' size={40} strokeWidth={1} />
    </div>
    </div>
  );
}

export default Navbar