"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css/bundle'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Image as MedusaImage } from "@medusajs/medusa"

type NewImageGalleryProps = {
  images: MedusaImage[]
}

const NewImageGallery: React.FC<NewImageGalleryProps> = ({ images }) => {
  const [openPopupImg, setOpenPopupImg] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="list-img grid grid-cols-2 gap-5 h-fit md:w-1/2 md:pr-[45px] w-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          width={1000}
          height={1000}
          alt='prd-img'
          className='w-full aspect-[3/4] object-cover rounded-[20px] cursor-pointer'
          onClick={() => {
            swiperRef.current?.slideTo(index)
            setOpenPopupImg(true)
          }}
        />
      ))}
      <div className={`popup-img ${openPopupImg ? 'open' : ''}`}>
        <span
          className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
          onClick={() => setOpenPopupImg(false)}
        >
          <Icon.X className="text-3xl text-white" />
        </span>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Thumbs]}
          navigation={true}
          loop={true}
          className="popupSwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => setOpenPopupImg(false)}>
              <Image
                src={image.url}
                width={1000}
                height={1000}
                alt='prd-img'
                className='w-full aspect-[3/4] object-cover rounded-xl'
                onClick={(e) => e.stopPropagation()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default NewImageGallery