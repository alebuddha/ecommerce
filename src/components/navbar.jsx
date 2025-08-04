import SearchBar from "./searchbar";
const elements = ['Home',"Contact","About",'Cart'];

function Navbar(){
  return(
    <div className="w-full border-1 flex justify-between p-2 items-center">
    <h1>Logo</h1>
    <SearchBar/>
    <ul className="flex gap-4 p-2 items-center">
      {
        elements.map((el)=> <li>{el}</li>
        )
      }
    </ul>
    </div>
  )
}
export default Navbar;