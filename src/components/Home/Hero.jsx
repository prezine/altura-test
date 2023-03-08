import React from 'react'
import ButtonPrimary from '../../elements/Buttons/ButtonPrimary'
import SectionWrap from '../../elements/Sections/SectionWrap'

const Hero = () => {

  return (
    <div className='bg-brandNavy1x'>
        <div className=''>
            <div className='bg-black/40'>
                <SectionWrap bgColor={'bg-transparent'}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className="col-span-1 space-y-3 self-center">
                            <h2 className="text-50 font-serif font-black">
                                No More WaitTime, We've done all the Research
                            </h2>
                            <p className='text-20 font-light'>
                                Get the hottest drops and make quick turn-overs. More collections than your favorite marketplace
                            </p>
                            <div className='pt-5'>
                                <ButtonPrimary />
                            </div>
                        </div>
                        <div className='col-span-1 h-[650px] flex justify-end items-center w-full'>
                            <div className='w-full max-w-[500px] px-4 py-5 h-[70%] flex flex-col justify-between gap-4 text-black bg-white drop-shadow-md rounded-xl'>
                                <div>

                                </div>
                                <div className=''>
                                    <h3 className='text-24 font-light'>The Alpha</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrap>
            </div>
        </div>
    </div>
  )
}

export default Hero