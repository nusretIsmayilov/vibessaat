
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/homePage/home";
import Products from "./pages/productsPage/Products";
import About from "./pages/about/About";
import Contact from "./pages/contactPage/Contact";
import "./App.css";
import Layout from "./Layout";
import Admin from "./pages/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
