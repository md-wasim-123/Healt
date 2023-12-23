import React from 'react'

const Button = (props) => {
 
    const {navText, color, hoverColor}=props
  return (
    <div>
      <button type="button" className={`text-white bg-[${color}] font-medium rounded-lg hover:bg-[${hoverColor}] text-sm k:px-4 md:px-3 k:py-[1.8px] sm:p-2 font-semibold k:text-[6px]  shadow hover:shadow-[#7635DC3D]`}>{navText}</button>
    </div>
  )
}

export default Button
