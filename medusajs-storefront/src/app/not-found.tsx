import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Footer from "@modules/layout/templates/footer"
import NavContainer from "@modules/layout/components/nav-container"
import NavbarActionsRight from "@modules/layout/components/navbar-actions-right"
import BannerTop from "@modules/layout/components/banner-top"
import topBannerdata from "@lib/data/json/TopBanner.json"
import navigationData from "@lib/data/json/Navigation.json"
import footerData from "@lib/data/json/Footer.json"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavContainer navigation={navigationData}>
          <NavbarActionsRight />
        </NavContainer>
        <BannerTop data={topBannerdata} />
        <main className="flex-1">
          <div className="page-not-found md:py-20 py-10 bg-linear ">
            <div className="container">
              <div className="flex items-center justify-between max-sm:flex-col gap-y-8">
                <Image
                  src={
                    "https://res.cloudinary.com/djoki7czl/image/upload/v1722991698/404-img_b5uo8n.png"
                  }
                  width={2000}
                  height={2000}
                  alt="bg-img"
                  priority={true}
                  className="sm:w-1/2 w-3/4"
                />
                <div className="text-content sm:w-1/2 w-full flex items-center justify-center sm:pl-10">
                  <div className="">
                    <div className="lg:text-[140px] md:text-[80px] text-[42px] lg:leading-[152px] md:leading-[92px] leading-[52px] font-semibold">
                      404
                    </div>
                    <div className="heading2 mt-4">
                      Oops! The page you were looking for doesn&apos;t exist
                    </div>
                    <div className="body1 text-secondary mt-4 pb-4">
                      You may have misstyped the address or the page may have
                      moved.
                    </div>
                    <LocalizedClientLink
                      className="flex items-center gap-3"
                      href="/"
                      data-testid="nav-store-link"
                    >
                      <Icon.ArrowLeft />
                      <div className="text-button">Back To Homepage</div>
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer {...footerData} />
      </div>
    </>
  )
}
