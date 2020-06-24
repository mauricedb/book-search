import React from "react";
import useSWR from "swr";

import { QueryResult } from "../types/books";
import SearchResults from "./SearchResults";

type Props = {
  query: string;
};

const Searcher: React.FC<Props> = ({ query }) => {
  const { data, error } = useSWR<QueryResult>(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query.replace(
      / /g,
      "+"
    )}&maxResults=25&langRestrict=en&filter=ebooks`
  );

  if (error) {
  }

  return <SearchResults items={data?.items ?? []} />;
};

Searcher.displayName = "Searcher";

export default React.memo(Searcher);
