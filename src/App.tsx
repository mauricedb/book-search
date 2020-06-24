import React from "react";
import Navbar from "./components/Navbar";
import SearchCriteria from "./components/SearchCriteria";
import SearchResults from "./components/SearchResults";

function App() {
  const [searching, setSearching] = React.useState(false);

  return (
    <div className="container">
      <Navbar />
      <SearchCriteria
        search={async () => {
          setSearching(true);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setSearching(false);
        }}
        disabled={searching}
      />
      <SearchResults />
    </div>
  );
}

App.displayName = "App";

export default App;
