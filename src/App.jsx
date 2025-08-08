import { useState } from "react";
import { Toaster } from "sonner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";
import Orders from "./pages/orders";
import Cart from "./pages/cart";
import ProductDetails from "./pages/productDetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-screen">

        <Router>
          <NavBar
            setSearchResults={setSearchResults}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <Routes>
            <Route 
              path="/"
              element={ <Home searchResults={searchResults} isLoading={isLoading} />}  
            />

            <Route path="/product/:id/user/:userid" element={<ProductDetails />} />

            <Route path="/order" element={<Orders/>}  />
            <Route path="/cart" element={<Cart/>}  />
            

          </Routes>

        </Router>

      </div>
      <Toaster richColors={true} />
    </>
  );
}

export default App;
