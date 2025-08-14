import ResultCard from "../components/resultCard";

function Home({ searchResults, isLoading }) {
  return (
    <div className="m-10 flex flex-row flex-wrap gap-4">
      {isLoading ? (
        <div>Loading search results...</div>
      ) : searchResults?.length > 0 ? (
        searchResults.map((result) => <ResultCard result={result} />)
      ) : (
        <div>No results... Search something.</div>
      )}
    </div>
  );
}
export default Home;
