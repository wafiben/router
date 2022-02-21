import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<ProductDetails  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
