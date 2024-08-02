import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import footerData from "@lib/data/json/Footer.json"
import topBannerdata from "@lib/data/json/TopBanner.json"
import navigationData from "@lib/data/json/Navigation.json"
import BannerTop from "@modules/layout/components/banner-top"
import NavContainer from "@modules/layout/components/nav-container"
import NavbarActionsRight from "@modules/layout/components/navbar-actions-right"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavContainer navigation={navigationData}>
          <NavbarActionsRight />
        </NavContainer>
        <BannerTop data={topBannerdata} />
        <main className="flex-1">{props.children}</main>
        <Footer {...footerData} />
      </div>
    </>
  )
}
