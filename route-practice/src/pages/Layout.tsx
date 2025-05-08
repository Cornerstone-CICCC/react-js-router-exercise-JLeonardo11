import Footer from "../components/Footer"
import Header from "../components/header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="container max-w-full">
      <Header />

      <main className="max-w-2xl mx-auto">
        <Outlet /> {/** Child routes load here */}
      </main>

      <Footer />
    </div>
  )
}

export default Layout