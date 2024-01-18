import React from 'react'

const Button = ({styles}) => {
  return (
    <a href='#contact' className={`font-medium font-poppins py-4 px-6 bg-blue-gradient text-[20px] text-primary rounded-md ${styles}`}>
      Get Started
    </a>
  )
}

export default Button