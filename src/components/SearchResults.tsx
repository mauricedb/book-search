import React from "react";
import SearchResult from "./SearchResult";

const SearchResults: React.FC = () => {
  const results = [1, 2, 3];
  return (
    <div>
      {results.map((i) => (
        <SearchResult key={i} />
      ))}
    </div>
  );
};

SearchResults.displayName = "SearchResults";

export default SearchResults;
