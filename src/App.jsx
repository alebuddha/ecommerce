import { useState } from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";

export default function App(){

  const [searchResults, setSearchResults] = useState([]);

  return(
    <div className="min-h-screen">
      {/* <Navbar/> */}

      <SearchBar setSearchResults = {setSearchResults} />

      <Home searchResults = {searchResults} />
      

    </div>
  )
}