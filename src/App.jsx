import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/layout/Header";
import ProductCard from "./components/products/ProductCard";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Footer from "./components/layout/Footer";

function App(){
  return(
    <>
    <Header/>
    <main className="main-content">
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </main>
    <Footer />
    </>
  );
}
export default App;