import React from "react"
import Marquee from "react-fast-marquee"
import { BannerTopProps } from "types/bannertop"

const BannerTop = ({ data }: BannerTopProps) => {
  return (
    <div className="banner-top bg-black py-3">
      <Marquee>
        {data.banners.map((bannerText, index) => (
          <React.Fragment key={index}>
            <div className="text-button-uppercase px-8 text-white">
              {bannerText}
            </div>
            {index < data.banners.length - 1 && (
              <div className="line w-8 h-px bg-white"></div>
            )}
          </React.Fragment>
        ))}
      </Marquee>
    </div>
  )
}

export default BannerTop
