import { BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";
import axios from 'axios';
import Login from "./components/Login";
import Register from "./components/Register";
import OrderDetail from "./components/OrderDetail";

axios.defaults.baseURL = 'https://product-management-back.onrender.com';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/order-detail" element={<OrderDetail/>}/>
    <Route path="/create-product" element={<CreateProduct/>}/>
    <Route path="/product-detail" element={<ProductDetails/>}/>
    <Route path="/update-product" element={<UpdateProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
