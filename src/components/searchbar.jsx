import { useState } from "react";
import { toast } from "sonner";

import { Search } from "lucide-react";
import { SearchCheck } from "lucide-react";

function SearchBar({ setSearchResults, isLoading, setIsLoading }) {
  // const {setSearchResults, isLoading, setIsLoading} = props;
  const [searchTerm, setSearchTerm] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleInputChange(event) {
    const query = event.target.value;
    setSearchTerm(query);
  }

  async function handleSearch() {
    if (searchTerm === "") {
      return toast.warning("Search term is required.");
    }

    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Error occurred! ");

      const data = await response.json();
      setSearchResults(data.products);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      return toast.error(error.message);
    }
  }

  return (
    <div
      className="border border-gray-700 bg-neutral-900 text-white flex items-center rounded-2xl 
                  transition hover:shadow-lg shadow-white/10 "
    >
      <button
        className=" border-r border-gray-700 px-4 py-2 rounded-l-2xl bg-neutral-800 
             hover:bg-gray-700 transition text-white font-medium"
        onClick={handleSearch}
      >
        {isLoading ? "Loading" : "Search"}
      </button>

      {/* <Search className=''/> */}

      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="What are you looking for?"
        className="p-2 bg-transparent placeholder-gray-400 text-white focus:outline-none text-sm"
      />
    </div>
  );
}

export default SearchBar;
