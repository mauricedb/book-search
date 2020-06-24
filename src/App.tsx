import React from "react";
import Navbar from "./components/Navbar";
import SearchCriteria from "./components/SearchCriteria";

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
    </div>
  );
}

App.displayName = "App";

export default App;
