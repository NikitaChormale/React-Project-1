import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast"
import Button from './Button';
import { CircleMinus, CirclePlus } from 'lucide-react';
function VegtableCard({
    id,
    name,
    images,
    price,
    unit,
    category,
    description,
    tags,
    AddToCard,
   


}) {
    const [quantity, setquantity] = useState(1);

    return (
        <div className=' border border-solid border-slate-800
    bg-white m-5 p-4 w-90 rounded-md ' key={id}>
            <div className='relative'>
                <img
                    src={images}
                    alt={name}
                    className='w-full h-48 object-cover rounded-md'
                />
                <span><p className='absolute top-2 right-2 text-black text-xl'>
                    {category}{name}</p></span>
            </div>

            <h3>{name}</h3>
            <p className='text-slate-500 '>{description}</p>
            <p className='my-2 text-slate-600'>
                <span className='text-xl font-bold text-slate-800'>₹ {price} </span>
                per {" "}
                {unit}
            </p>

            <p>{tags.join(",")}</p>
            <div className='flex justify-center items-center my-4 gap-4'>
                <CircleMinus
                    className='cursor-pointer'
                    onClick={() => {
                        if (quantity > 1) {
                            setquantity(quantity - 1)
                        }
                        else {
                            toast.error("Quantity cannot be less than 1");
                        }
                    }} />
                <label>{quantity}</label>
                <CirclePlus
                    className='cursor-pointer'
                    onClick={() => {
                        if (quantity < 10) {
                            setquantity(quantity + 1);
                        }
                        else {
                            toast.error("Quantity cannot be greater than 10");
                        }
                    }}
                />
            </div>
            <div className='flex justify-center'>
                <Button
                    title={"Add To Card"}
                    onClick={() => {
                        AddToCard({
                            id,
                            name,
                            images,
                            price,
                            unit,
                            category,
                            description,
                            tags,
                            AddToCard,
                            quantity,
                        });
                    }}
                />

            </div>
            <Toaster />
        </div>

    );
}

export default VegtableCard
