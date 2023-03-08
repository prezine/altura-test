import React from 'react'

const SectionWrap = ({id, children, paddingX, paddingY, bgColor}) => {
  return (
    <div id={id} className={` ${paddingX || 'px-8 sm:px-10 xl:px-20'} ${paddingY || 'py-12'} ${bgColor}  `}>
        {children}
    </div>
  )
}

export default SectionWrap