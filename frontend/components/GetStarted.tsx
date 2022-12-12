import Image from 'next/image'
import React from 'react'
import { styles } from '../constants/style'
import { arrowUp } from '../public'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2'>
            Get
          </p>
          <Image src={arrowUp} alt="arrow" width={23} height={23} className="object-contain" />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'>
          Started
        </p>
      </div>
    </div>
  )
}

export default GetStarted