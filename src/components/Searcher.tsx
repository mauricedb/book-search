import React from "react";
import useSWR from "swr";

import { QueryResult } from "../types/books";
import fetcher from "../utils/fetcher";
import SearchResults from "./SearchResults";

type Props = {
  query: string;
};

const Searcher: React.FC<Props> = ({ query }) => {
  const { data } = useSWR<QueryResult>(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&maxResults=25&langRestrict=en&xfilter=ebooksb`,
    fetcher,
    { suspense: true }
  );

  return <SearchResults items={data?.items ?? []} />;
};

Searcher.displayName = "Searcher";

export default React.memo(Searcher);
