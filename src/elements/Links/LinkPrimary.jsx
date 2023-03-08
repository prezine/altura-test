import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkPrimary = ({id, bgcolor, textFont, textColor, hasArrow, arrowFillColor, text, link, linksOut}) => {
  return (
   <>
      {
        linksOut 
        ?
        <a href={link || '#'} className={`${bgcolor || 'bg-white'} ${textColor || 'text-black'} rounded-lg w-fit ${textFont || 'font-medium'} h-fit py-2.5 px-4 ${hasArrow && 'flex flex-row items-center gap-2 pl-4 pr-5 hover:pr-4 hover:gap-3 trans-all-500-ease-in-out text-sm md:text-base'}`}>
            <span>{text || 'Go To Opensea'}</span>
            {hasArrow &&
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={`${arrowFillColor}`} d="M18.0001 12.3236C17.9953 11.7975 17.7833 11.2945 17.4101 10.9236L13.1201 6.62361C12.9328 6.43736 12.6793 6.33282 12.4151 6.33282C12.1509 6.33282 11.8975 6.43736 11.7101 6.62361C11.6164 6.71657 11.542 6.82717 11.4912 6.94903C11.4405 7.07089 11.4143 7.2016 11.4143 7.33361C11.4143 7.46562 11.4405 7.59633 11.4912 7.71818C11.542 7.84004 11.6164 7.95064 11.7101 8.04361L15.0001 11.3236H5.00012C4.73491 11.3236 4.48055 11.429 4.29302 11.6165C4.10548 11.804 4.00012 12.0584 4.00012 12.3236C4.00012 12.5888 4.10548 12.8432 4.29302 13.0307C4.48055 13.2182 4.73491 13.3236 5.00012 13.3236H15.0001L11.7101 16.6136C11.5218 16.8006 11.4155 17.0547 11.4146 17.3201C11.4136 17.5854 11.5181 17.8403 11.7051 18.0286C11.8921 18.2169 12.1462 18.3232 12.4116 18.3242C12.677 18.3251 12.9318 18.2206 13.1201 18.0336L17.4101 13.7336C17.7857 13.3603 17.9979 12.8532 18.0001 12.3236Z" fill="white"/>
                </svg>
            }
        </a>
    :
      <NavLink to={link || '#'} className={`${bgcolor || 'bg-white'} ${textColor || 'text-black'} rounded-lg w-fit ${textFont || 'font-medium'} h-fit py-2.5 px-4 ${hasArrow && 'flex flex-row items-center gap-2 pl-4 pr-5 hover:pr-4 hover:gap-3 trans-all-500-ease-in-out'}`}>
              <span>{text || 'Go To Opensea'}</span>
              {hasArrow &&
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className={`${arrowFillColor}`} d="M18.0001 12.3236C17.9953 11.7975 17.7833 11.2945 17.4101 10.9236L13.1201 6.62361C12.9328 6.43736 12.6793 6.33282 12.4151 6.33282C12.1509 6.33282 11.8975 6.43736 11.7101 6.62361C11.6164 6.71657 11.542 6.82717 11.4912 6.94903C11.4405 7.07089 11.4143 7.2016 11.4143 7.33361C11.4143 7.46562 11.4405 7.59633 11.4912 7.71818C11.542 7.84004 11.6164 7.95064 11.7101 8.04361L15.0001 11.3236H5.00012C4.73491 11.3236 4.48055 11.429 4.29302 11.6165C4.10548 11.804 4.00012 12.0584 4.00012 12.3236C4.00012 12.5888 4.10548 12.8432 4.29302 13.0307C4.48055 13.2182 4.73491 13.3236 5.00012 13.3236H15.0001L11.7101 16.6136C11.5218 16.8006 11.4155 17.0547 11.4146 17.3201C11.4136 17.5854 11.5181 17.8403 11.7051 18.0286C11.8921 18.2169 12.1462 18.3232 12.4116 18.3242C12.677 18.3251 12.9318 18.2206 13.1201 18.0336L17.4101 13.7336C17.7857 13.3603 17.9979 12.8532 18.0001 12.3236Z" fill="white"/>
                  </svg>
              }
        </NavLink>
   }
   </>
   
  )
}

export default LinkPrimary