import React from "react"
import { BannerTopProps } from "types/bannertop"

const BannerTop = ({ title }: BannerTopProps) => {
  return (
    <>
      <div className="top-nav md:h-[44px] h-[30px] style-one bg-black">
        <div className="container mx-auto h-full">
          <div className="top-nav-main flex justify-center h-full">
            <div className="text-center text-button-uppercase text-white flex items-center">
              {title}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerTop