"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css/bundle"
import { TestimonialShopLinkType, TestimonialType } from "types/testimonial"
import TestimonialItem from "../testimonialitem"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface Props {
  data: Array<TestimonialType>
  limit: number
  shopLinkdata: TestimonialShopLinkType
}

const Testimonial: React.FC<Props> = ({ data, limit, shopLinkdata }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <>
      <div className="testimonial-block style-six md:py-15 py-10 ">
        <div className="container relative flex items-center justify-between flex-wrap gap-y-6 max-md:flex-col-reverse">
          <div className="md:w-1/2 md:pr-12 md:py-16 w-full list-testimonial section-swiper-navigation style-small-border">
            <Swiper
              slidesPerView={1}
              navigation
              modules={[Navigation, Autoplay]}
              className="h-full "
              onSlideChange={handleSlideChange}
            >
              {data.slice(0, limit).map((prd) => (
                <SwiperSlide key={prd.id} data-item={prd.id}>
                  <TestimonialItem data={prd} key={prd.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="list-avatar md:w-1/2 md:pl-5 md:absolute md:right-4 top-0 bottom-0 h-full text-center">
            {data.slice(0, limit).map((prd, index) => (
              <div
                key={prd.id}
                className={`bg-img rounded-[32px] overflow-hidden ${
                  index === activeIndex ? "active" : ""
                }`}
                data-item={prd.id}
              >
                <Image
                  src={prd.avatar}
                  width={500}
                  height={500}
                  alt={prd.name}
                  className="avatar w-full h-12 object-cover"
                />
              </div>
            ))}

            <LocalizedClientLink
              href={shopLinkdata.buttonLink}
              className="text-button-uppercase font-medium text-center underline pt-5 inline-block"
            >
              {shopLinkdata.buttonText}
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
