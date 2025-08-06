import ResultCard from "../components/resultCard";

function Home({ searchResults, isLoading }) {
  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <div>Loading search results...</div>
      ) : searchResults?.length > 0 ? (
        searchResults.map((result) => <ResultCard result={result} />)
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
}
export default Home;
