import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "sonner";

import ResultCard from "../components/resultCard";
import AddCart from "./add2cart";

function Search() {
  const { query } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function handleSearch() {
      try {
        setIsLoading(true);
        const url = `https://dummyjson.com/products/search?q=${query}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error(`Error OCcured`);
        const data = await response.json();
        setSearchResults(data.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        return toast.error(error.message);
      }
    }
    handleSearch();
  }, [query]);

  return (
    <div className="m-5 flex flex-wrap gap-10 items-center justify-center ">
      {searchResults?.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Link key={result.id} to={`/details/${result.id}`}>
              <div
                className="relative bg-slate-700 p-3 flex flex-col gap-3  w-50 items-center  text-center rounded-lg 
                            shadow shadow-white/50"
              >
                <div className="flex flex-col gap-2 items-center justify-between ">
                  <span className="absolute top-2 left-2 p-1 bg-red-700 text-white text-xs font-bold w-6 h-6 
                            flex items-center justify-center rounded-full 
                            shadow-md ">
                    {result.id}
                  </span>

                  <img
                    className="object-contain h-32 "
                    src={result.images[0]}
                    alt={result.title}
                  />
                  <span className="h-10  ">{result.title} </span>

                  <AddCart />
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div>No Result found </div>
      )}
    </div>
  );
}
export default Search;
