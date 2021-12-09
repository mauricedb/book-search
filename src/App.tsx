import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchCriteria from './components/SearchCriteria';
import Searcher from './components/Searcher';
import fetcher from './utils/fetcher';
import Loading from './components/Loading';

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
        <Routes>
          <Route path="/" element={<SearchCriteria />} />
          <Route path="/search/:field/:query" element={<SearchCriteria />} />
        </Routes>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/search/:field/:query" element={<Searcher />} />
          </Routes>
        </Suspense>
      </div>
    </SWRConfig>
  </BrowserRouter>
);

App.displayName = 'App';

export default App;
