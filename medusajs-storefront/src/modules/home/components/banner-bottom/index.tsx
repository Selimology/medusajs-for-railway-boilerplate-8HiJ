import React from 'react'
import Marquee from 'react-fast-marquee'

interface BannerItem {
  text: string
  icon: string
}

interface BannerBottomProps {
  data: {
    banners: BannerItem[]
    textColor: string
    bgLine: string
  }
}

const BannerBottom: React.FC<BannerBottomProps> = ({ data }) => {
  return (
    <div className={`banner-bottom md:py-8 py-4 bg-black`}>
      <Marquee>
        {data.banners.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`heading5 md:px-[110px] px-12 text-white`}>
              {item.text}
            </div>
            <div className={`${item.icon} md:text-[32px] text-[24px]`}></div>
          </React.Fragment>
        ))}
      </Marquee>
    </div>
  )
}

export default BannerBottom