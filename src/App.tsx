import React, { Suspense } from "react";
import { SWRConfig } from "swr";

import Navbar from "./components/Navbar";
import SearchCriteria from "./components/SearchCriteria";
import Searcher from "./components/Searcher";
import fetcher from "./utils/fetcher";

function App() {
  const [query, setQuery] = React.useState("");

  return (
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <div className="container">
        <Navbar />
        <SearchCriteria
          search={(query) => {
            setQuery(query);
          }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          {query && <Searcher query={query} />}
        </Suspense>
      </div>
    </SWRConfig>
  );
}

App.displayName = "App";

export default App;