
import {
  Salad as SaladIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import { useEffect, useState } from 'react';
import { Link } from "react-router";
import logo from "./../assets/logo1-removebg-preview.png"

function Navbar({ refreshCart }) {
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCardItem(existingCart);

  }, [refreshCart])
  return (
    <div className='bg-[#ffbc4c] text-black sticky top-2 max-w-10/12 mx-auto px-10 py-2
    rounded-full flex items-center justify-center gap-2 my-2 z-50'>
      <Link to="/" className='flex items-center'>
        <h2 className='text-2xl font-bold'>🧺Fruitora Fruits</h2>
      </Link>

      <Link to="/my-cart" className='ml-auto relative'>

        {cardItem.length > 0 ? (
          <span className=" absolute top-2 right-1 bg-red-600
       text-white rounded-full px-2 text-sm">
            {cardItem.length}
          </span>
        ) : null}
         <ShoppingCartIcon className='inline-block' size={40} strokeWidth={1} />
      </Link>
      <div className="flex items-center gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-white transition duration-300">
          Home
        </Link>
        <Link to="/vegtable" className="hover:text-white transition duration-300">
          Product
        </Link>
        <Link to="/callus" className="hover:text-white transition duration-300">
          Call Us
        </Link>

      </div>
    </div>

  );
}

export default Navbar