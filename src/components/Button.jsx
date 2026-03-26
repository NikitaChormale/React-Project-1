import React from 'react'
const BUTTON_VARIENTS = {
    primary: "bg-[#43A047]  hover:bg-[#e6a200] transition-duration-700",
    secondary: "bg-[#66BB6A] hover:bg-blue-600 text-white transition-duration-700 ",
    tertiary: "bg-[#F1F8E9]  hover:bg-slate-800  text-white transition-duration-700"
};
const BUTTON_SIZES = {
    large: "text-3xl px-8 py-1.5 m-3",
    medium: "text-2xl px-8 py-1 m-2",
    small: "text-xl px-6 py-0.5 m-1",
};
function Button({ title,
    onClick = () => { },
    variant = "primary",
    size = "medium",
}) {
    return (
        <button onClick={onClick} className={`rounded-full ${BUTTON_VARIENTS[variant]} ${BUTTON_SIZES[size]}  px-10 
    py-2  cursor-pointer`}>{title}</button>
    )
}

export default Button
