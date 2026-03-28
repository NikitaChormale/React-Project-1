import React from 'react'
const BUTTON_VARIENTS = {
    primary: "bg-[#2ECC71]  hover:bg-[#27AE60]  text-white transition-duration-300",
    secondary: "bg-[#FF7F50] hover:bg[#E76F51] text-white transition-duration-300 ",
    tertiary: "bg-[#F1FAEE]  hover:bg[#E9F5DB] text-[#333] transition-duration-300",
    danger: "bg-[#E63946] text-white hover:bg-[#C1121F] transition-duration-300",
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
