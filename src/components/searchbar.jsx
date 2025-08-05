import { Search } from 'lucide-react';
import { SearchCheck } from 'lucide-react';

// export default function SearchBar(){
//   return(
//       <div className='flex border-1 border-white items-center p-2 w-100 rounded-2xl'>
//         <Search className='' />
//         <input type="text" placeholder='Browse here'
//         className="text-left  p-1 border-1 border-white w-full"
//        />
//       </div>
    
//   )
// }


import {useState} from "react";

function SearchBar(props){
  const {searchprop} = props;
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange (event){
    const query = event.target.value;
    setSearchTerm(query)
  }

  async function handleSearch(){
    if(searchTerm === "") return;

    const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
    const response = await fetch(url);
    
    if(!response.ok) console.error("Error occurred! ");

    const data = await response.json();
    searchprop(data.products);

    
  }
  return(
    <div className="border border-slate-800 flex items-center rounded-2xl" >
      <button className=" border-r-1 border-black p-2 rounded-l-2xl hover:cursor-pointer  transition hover:bg-red-500" 
        onClick={handleSearch}> SEARCH
      </button>
      {/* <Search className=''/> */}
      <input type="text"  
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Browse here'
          className='p-2 focus:outline-none '
         
      />
    </div>
  )
}

export default SearchBar;