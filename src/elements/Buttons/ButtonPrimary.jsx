import React from 'react'

const ButtonPrimary = ({bgColor, textColor, handleClick, text}) => {
  return (
    <button type='button' onClick={handleClick} className={`w-fit h-fit py-2.5 px-4  flex gap-2  ${textColor || 'text-white'} ${bgColor || 'bg-white/30'} rounded-xl`}>
        {text || 'Go To Market'}
    </button>
  )
}

export default ButtonPrimary