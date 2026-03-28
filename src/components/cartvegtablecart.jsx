import React from 'react'
import Button from './Button';

const removeFromCard=(id) =>{
     const cartItem= JSON.parse (localStorage.getItem(("cart"))) ||[];
     const updatedCartItem= cartItem.filter(( item) => item.id !== id);
     localStorage.setItem("cart",JSON.stringify(updatedCartItem));
     window.location.reload();
};


function cartvegtablecart({
    id,
    name,
    images,
    price,
    unit,
    description,
    quantity,
}) {
    return (
        <div className=' border border-solid border-slate-800 flex flex-wrap 
    bg-white m-5 p-4 rounded-md  '>
            <div>
                <img
                    src={images}
                    alt={name}
                    className='w-32 h-28 object-cover rounded-md pr-10 '
                />
                </div>
                <div>
                    <p className='text-2xl  ml-2'>
                        {name} {" "}
                        <span className='text-sm'>
                            ₹ {price}/{unit}
                        </span>
                    </p>
                    <p className='text-slate-500 ml-2'>{description}</p>
                    <p className='text-slate-600 ml-2'> {quantity} * {price}</p>
                    <p className='text-slate-600 ml-2'> ₹ {quantity * price} /-</p>
                    <div>
                        <Button title={"Remove From Cart"} size="small" 
                        variant='danger' onClick={()=>{removeFromCard(id);

                        }}/>
                    
                </div>
            </div>
        </div>
    );

}
export default cartvegtablecart
