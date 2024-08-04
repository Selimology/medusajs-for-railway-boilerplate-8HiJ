import React from "react"
import Footer from "@modules/layout/templates/footer"
import footerData from "@lib/data/json/Footer.json"
import NavContainer from "../components/nav-container"
import navigationData from "@lib/data/json/Navigation.json"
import NavbarActionsRight from "../components/navbar-actions-right"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <NavContainer navigation={navigationData}>
        <NavbarActionsRight />
      </NavContainer>
      <main className="relative">{children}</main>
      <Footer {...footerData} />
    </div>
  )
}

export default Layout
