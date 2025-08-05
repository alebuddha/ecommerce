import SearchBar from "./searchbar";

function Navbar(){
  const elements = ['Home',"Contact","About",'Cart'];
 
  return(
    <div className="w-full p-2 border-1 flex justify-between  items-center  ">

    <h1>Logo</h1>

    <SearchBar setSearchResults={setSearchResults}/>

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
export default Navbar;