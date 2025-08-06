import SearchBar from "./searchbar";
import { House } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function NavBar({ setSearchResults, isLoading, setIsLoading }) {
  const elements = ["Home", "Contact", "About"];

  return (
    <div
      className="w-full p-4 rounded-xl flex justify-between items-center 
          md:flex-row md:justify-between md:items-center gap-4 md:gap-0
           bg-neutral-800/30 backdrop-blur-md border border-white/10 shadow-lg text-gray-100"
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <span className="text-xl flex items-center transition hover:text-2xl text-gray-100 w-36">
          <House className="text-gray-300 hover:text-amber-400 transition" />
          Shop<span className="text-rose-500">Nest</span>
        </span>
      </div>

      <div className="w-full md:w-1/3">
        <SearchBar
          setSearchResults={setSearchResults}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <ul className="w-full md:w-auto flex justify-center md:justify-end items-center gap-6 flex-wrap">
        {elements.map((el) => (
          <li
            className="transition hover:text-amber-400 cursor-pointer"
            key={el}
          >
            {el}
          </li>
        ))}

        <ShoppingCart className="text-gray-300 transition hover:text-rose-500" />
      </ul>
    </div>
  );
}
export default NavBar;
