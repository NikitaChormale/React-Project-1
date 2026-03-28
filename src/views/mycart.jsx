import React, { useEffect,useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cartvegtablecart from '../components/cartvegtablecart';

function mycart() {
    const[cartItem,SetcartItem]= useState([]);
    const [totalAmount,setTotalAmount]=useState([]);
  

    useEffect (() =>{
      const existingCart= JSON.parse (localStorage.getItem("cart")) || [];
      SetcartItem(existingCart);
    }, []);
     
    useEffect (() =>{
      let total=0;
      cartItem.map((item) => {
        total +=item.price* item.quantity;
      });
       setTotalAmount(total);
    }, [cartItem]);
  return (
    <div>
        <Navbar/>
       <h3>Total Amount : ₹ {totalAmount} /-</h3>
         <div className='min-h-screen'>
          <div className='max-h[700px] py-4 overflow-x-scroll'>
           {cartItem.map((item) => {
                return <Cartvegtablecart key={item.id}
                {...item}/>
            })}
            </div>
            </div>         
        <Footer/>
    </div>
  );
}

export default mycart;