import React, {useEffect, useRef, useState} from 'react'
import LinkPrimary from '../../../elements/Links/LinkPrimary';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ListingModalInner = ({data, isModalOpen}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null); 
    const swiperRef = useRef()

    useEffect(() => {
        isModalOpen || setThumbsSwiper(null)
    }, [isModalOpen])
    

    const mappedListings = data.map((list) => {
        return <div key={list.slug} className={`flex flex-col w-full flex-1`}>
            <>
                <Swiper
                    style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 w-full md:w-[80%]"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {list.imgs.map((img, cur)=>{
                        return <SwiperSlide key={cur} data-image-url={img.img} className={`rounded-xl`}>
                            <img src={img.img} alt="" className='w-[90%] md:w-[60%] aspect-square rounded-xl' />
                        </SwiperSlide>
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={0}
                    slidesPerView={3}
                    breakpoints={{
                        400:{
                            slidesPerView:2
                        },
                        900:{
                            slidesPerView:3
                        }
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper w-[80%]"
                >
                    {list.imgs.map((image, c)=>{
                        return <SwiperSlide key={c} data-image-url={image.img} className={``}>
                            <img src={image.img} alt="" className='h-20 w-full aspect-square' />
                        </SwiperSlide>
                    })}
                </Swiper>
            </>
            
            <div className='py-4 space-y-3'>
                <p className='text-30'>{list.collection}</p>
                <p className='text-sm md:text-base font-light'>{list.description}</p>
            </div>
            <div className='flex gap-5 items-end'>
                {list.stats.map((stat, index)=>{
                    return <div key={index}>
                        <p>{stat.amount}</p>
                        <p className='text-gray-600 text-sm'>{stat.stat}</p>
                    </div>
                })}
            </div>
            <div className='pt-8'>
                <LinkPrimary hasArrow={true} arrowFillColor={'fill-black'} link={list.link} linksOut={true} text={'View On Opensea'} />
            </div>
        </div>
    })
    
    return (
        <>
            {mappedListings}
        </>
    )
}

export default ListingModalInner;