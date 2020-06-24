import React, { Suspense } from "react";

import Navbar from "./components/Navbar";
import SearchCriteria from "./components/SearchCriteria";
import Searcher from "./components/Searcher";

function App() {
  const [searching, setSearching] = React.useState(false);
  const [query, setQuery] = React.useState("Douglas Adams");

  return (
    <div className="container">
      <Navbar />
      <SearchCriteria
        search={async (query) => {
          setSearching(true);
          setQuery(query);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setSearching(false);
        }}
        disabled={searching}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Searcher query={query} />
      </Suspense>
    </div>
  );
}

App.displayName = "App";

export default App;
