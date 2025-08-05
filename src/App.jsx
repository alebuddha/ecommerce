import { useState } from "react";
import {Toaster} from "sonner";

import Home from "./pages/home";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";

function App(){
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return(
    <>
      <div className="min-h-screen">

        



        <NavBar 
          setSearchResults={setSearchResults} 
          isLoading={isLoading} 
          setIsLoading = {setIsLoading} 
        />
      
        <Home 
          searchResults = {searchResults } 
          isLoading={isLoading}
        /> 

      </div>
      <Toaster  richColors={true}/>
    </>
  );
}

export default App;