import React from 'react'

const Button = ({ styles }: { styles: any }) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} w-max-content rounded`}>
      Get Started
    </button>
  )
}

export default Button