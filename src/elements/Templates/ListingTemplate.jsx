import React from 'react'

const ListingTemplate = () => {
  return (
    <div className="col-span-1 bg-brandNavy1x px-6 py-10 rounded-xl drop-shadow-xl">
        <div className='rounded-xl h-60 skeleton w-full'>

        </div>
        <div className='py-4'>
            <div className='h-4 w-[60%] rounded-lg skeleton'></div>
            <div className="py-4 space-y-3">
                <div className='h-2 w-[90%] rounded-lg skeleton'></div>
                <div className='h-2 w-[70%] rounded-lg skeleton'></div>
                <div className='h-2 w-[80%] rounded-lg skeleton'></div>
            </div>
            <div className="pt-5">
                <div className='h-10 w-40 rounded-lg skeleton'></div>
            </div>
        </div>
    </div>
  )
}

export default ListingTemplate