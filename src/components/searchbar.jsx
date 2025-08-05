// import { Search } from 'lucide-react';

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
  const {setSearchResults} = props;
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
    setSearchResults(data.products);

    
  }
  return(
    <div className="border border-slate-800 flex items-center" >
      <button className="border bg-teal-400 p-2 " onClick={handleSearch}> SEARCH</button>
      <input type="text"  
          value={searchTerm}
          onChange={handleInputChange}
         
      />
    </div>
  )
}

export default SearchBar;