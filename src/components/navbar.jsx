import SearchBar from "./searchbar";

function NavBar({setSearchResults, isLoading, setIsLoading}){
  const elements = ['Home',"Contact","About",'Cart'];
 
  return(
    <div className="w-full p-2 border-1 flex justify-between  items-center  ">

    <h1>Logo</h1>

    <SearchBar 
      setSearchResults={setSearchResults}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />

    <ul className="flex items-center gap-4">
        {
          elements.map((el) => (
            <li className="hover:text-red-500 cursor-pointer" >{el}</li>
            )
          )
        }
    </ul>

    </div>
  );
}
export default NavBar;