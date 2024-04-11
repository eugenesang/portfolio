
import React, { useEffect, useState } from "react"


import { ResponsiveNavbar, default as NavBar } from "../Navbar"
import Header from "../Header"


function Layout({ children }) {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <div className={`w-screen h-screen`}>
      <Header>
        <NavBar />
      </Header>
      {children}
      {windowWidth <= 700 && <ResponsiveNavbar />}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

