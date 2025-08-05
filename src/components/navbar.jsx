import SearchBar from "./searchbar";
const elements = ['Home',"Contact","About",'Cart'];

function Navbar(){
  return(
    <div className="w-full p-2 border-1 flex justify-between  items-center  ">
    <h1>Logo</h1>
    <SearchBar/>
    <ul className="flex gap-9 p-3 items-center " >
      {
        elements.map((el)=>{ 
          return <li className="hover:text-red-500 cursor-pointer" >{el}</li>
        } 
        )
      }
    </ul>
    </div>
  )
}
export default Navbar;