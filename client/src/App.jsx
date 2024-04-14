import {Routes, Route} from "react-router-dom";
import Search from "./components/Search"
import AddProduct from "./components/AddProduct"
import ProductLists from "./components/ProductLists"
import UpdateProduct from "./components/UpdateProduct"

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/update-product" element={<UpdateProduct />} />
    </Routes>
  </>
}

const HomePage = () => {
  return <>
    <Search />
    <AddProduct />
    <ProductLists />
  </>
} 

export default App
