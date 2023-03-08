import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper';
import Listings from '../../../data/listings'
import ListingCard from '../../../elements/Cards/ListingCard'
import InvisibleModalWrap from '../../../elements/Modals/InvisibleModalWrap'
import SectionWrap from '../../../elements/Sections/SectionWrap'
import ListingTemplate from '../../../elements/Templates/ListingTemplate'
import ListingModalInner from './ListingModalInner';
import useModalStore from '../../../utils/stores/useModalStore';

const Featured = () => {
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentModal, setCurrentModal] = useState([])
    const openModalState = useModalStore(state=>state.openModalState)
    
    let arrayOfNums = []

    for (let i = 0; i < 3; i++) {
        arrayOfNums.push(i)
    }

    const handleModalOpen = (val) => {
        setCurrentModal(Listings.filter((listing, i) => {
            return listing.slug == val
        }))
        setIsModalOpen(true)
        openModalState()
    }

  return (
    <SectionWrap bgColor={`bg-brandNavy1x/95`}>
        <div className={`text-center text-white py-12`}>
            <h2 className='text-40 font-serif font-black'>Featured Collections</h2>
        </div>

        
        <div className='text-white font-light flex flex-row gap-5 py-5'>
            <button type='button' onClick={()=>setLoading(true)}>Start Loading</button>
            <button type='button' onClick={()=>setLoading(false)}>Stop Loading</button>
        </div>


        {
            loading 
            ?
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {arrayOfNums.map((template, i)=>{
                    return <ListingTemplate key={i} />
                })}
                </div>
            :
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Listings.map((listing, index)=>{
                        return <ListingCard key={index} handleClick={handleModalOpen} name={listing.collection} slug={listing.slug} description={listing.description} image={listing.imgs[0].img} stopLoading={true} />
                    })}
                </div>
        }

        <InvisibleModalWrap modalId={'listingsModal'} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
            <div className='flex  flex-col w-[90%] sm:w-[80%] lg:w-[50%] max-w-3xl rounded-xl m-auto border-[0.5px] bg-black h-fit px-5 py-10 z-40 text-white'>
                <div className={``}>
                    <ListingModalInner data={currentModal} isModalOpen={isModalOpen} />
                </div>
            </div>
        </InvisibleModalWrap>
    </SectionWrap>
  )
}

export default Featured