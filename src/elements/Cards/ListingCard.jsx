import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import LinkPrimary from '../Links/LinkPrimary'

const ListingCard = ({id, image, name, description, slug, stopLoading, handleClick}) => {
  return (
    <div id={id} className="col-span-1 bg-brandNavy1x px-6 py-10 rounded-xl drop-shadow-xl">
        <div className={`rounded-xl h-60 ${stopLoading || 'skeleton'} w-full`}>
            <img src={image} alt={name} className={` bg-auto h-60 w-full`} />
        </div>
        <div className='py-4'>
            <h4 className={`font-serif text-20 font-black whitespace-nowrap overflow-hidden text-ellipsis`}>
                {name || 'The Ape Planet'}
            </h4>
            <div className="py-4 space-y-3 text-sm md:text-base">
                <p className='truncated-text font-light text-ellipsis'>{description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non inventore libero dicta nemo est ipsum.'}</p>
            </div>
            <div className="pt-5">
                <ButtonPrimary handleClick={()=>handleClick(slug)} bgColor={'bg-white'} textColor={'text-brandNavy1x font-medium'} text={'View Collection'} />
            </div>
        </div>
    </div>
  )
}

export default ListingCard