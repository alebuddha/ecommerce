import {useState} from "react";
import { toast } from "sonner";

import { Search } from 'lucide-react';
import { SearchCheck } from 'lucide-react';

function SearchBar({setSearchResults, isLoading, setIsLoading}){
  // const {setSearchResults, isLoading, setIsLoading} = props;
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleInputChange (event){
    const query = event.target.value;
    setSearchTerm(query)
  }
  

  async function handleSearch(){
    if(searchTerm === "") {
      return toast.warning("Search term is required.")
    }

    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
      const response = await fetch(url);
    
      if(!response.ok) throw new Error("Error occurred! ");

      const data = await response.json();
      setSearchResults(data.products);

      setIsLoading(false);
    } catch(error){
        console.log(error);

        setIsLoading(false);
        return toast.error(error.message)
    }
  }

  return(
    <div className="border border-black flex items-center rounded-2xl" >
      <button className=" border-r-1 border-black p-2 rounded-l-2xl hover:cursor-pointer  transition hover:bg-red-500" 
          onClick={handleSearch}> 
        {isLoading ? "Loading" : "Search"}
      </button>

      {/* <Search className=''/> */}

      <input type="text"  
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Browse here'
          className='p-2 focus:outline-none '
      />
    </div>
  );
}

export default SearchBar;