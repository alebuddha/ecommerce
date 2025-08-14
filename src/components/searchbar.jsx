import { memo, useEffect, useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SearchBar = memo(function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Auto-focus input on mount
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  // Navigate only when user clicks or presses Enter
  const handleSearch = useCallback(() => {
    if (searchTerm.trim() === "") {
      toast.warning("Search term is required.");
      return;
    }
    navigate(`/search/${searchTerm}`);
  }, [navigate, searchTerm]);

  // Allow pressing Enter to trigger search
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
 
  return (
    <div
      className="border border-gray-700 bg-neutral-900 text-white flex items-center rounded-2xl 
                  transition hover:shadow-lg shadow-white/10"
    >
      <button
        className="border-r border-gray-700 px-4 py-2 rounded-l-2xl bg-neutral-800 
                   hover:bg-gray-700 transition text-white font-medium"
        onClick={handleSearch}
      >
        Search
      </button>

      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="What are you looking for?"
        className="p-2 bg-transparent placeholder-gray-400 text-white focus:outline-none text-sm w-full"
      />
    </div>
  );
});

export default SearchBar;
