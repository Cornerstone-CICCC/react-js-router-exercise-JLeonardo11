import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import ProductLayout from "./pages/Products/ProductLayout"
import ProductDetail from "./pages/Products/ProductDetail"
import ProductList from "./pages/Products/ProductsList"

const App =() => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Products" element={<ProductLayout/>}>
            <Route index element={<ProductList/>} />
            <Route path=":id" element={<ProductDetail/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
