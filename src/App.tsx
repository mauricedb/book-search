import React, { Suspense } from "react";
import { SWRConfig } from "swr";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchCriteria from "./components/SearchCriteria";
import Searcher from "./components/Searcher";
import fetcher from "./utils/fetcher";
import Loading from "./components/Loading";

const App: React.FC = () => (
  <BrowserRouter>
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <div className="container">
        <Navbar />
        <Route path={["/search/:field/:query", "/search/:query", "/"]}>
          <SearchCriteria />
        </Route>
        <Suspense fallback={<Loading />}>
          <Route path={["/search/:field/:query", "/search/:query"]}>
            <Searcher />
          </Route>
        </Suspense>
      </div>
    </SWRConfig>
  </BrowserRouter>
);

App.displayName = "App";

export default App;
