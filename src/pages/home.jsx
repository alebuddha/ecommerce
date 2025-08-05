import ResultCard from "../components/resultCard";

function Home(props){
  const {searchResults} = props;
  
  return (
    <div className="flex flex-col gap-4">
      {searchResults.map((result) =>{
        return <ResultCard result = {result} />
      })}
    </div>

  )
}
export default Home;