import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`font-medium font-poppins py-4 px-6 bg-blue-gradient text-[20px] text-primary rounded-md ${styles}`}>
      Get Started
    </button>
  )
}

export default Button