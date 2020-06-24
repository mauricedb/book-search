import React from "react";
import useSWR from "swr";

import { QueryResult, SearchModifier } from "../types/books";
import SearchResults from "./SearchResults";
import { assertNever } from "../utils/assertNever";

type Props = {
  query: string;
  searchModifier: SearchModifier;
};

const getQueryPrefix = (searchModifier: SearchModifier): string => {
  switch (searchModifier) {
    case "none":
      return "";
    case "inauthor":
      return "inauthor:";
    case "intitle":
      return "intitle:";
    case "subject":
      return "subject:";
    default:
      assertNever(searchModifier);
  }
  return "";
};

const Searcher: React.FC<Props> = ({ query, searchModifier }) => {
  const prefix = getQueryPrefix(searchModifier);
  const q = `${prefix}${query.replace(/ /g, "+")}`;
  const { data, error } = useSWR<QueryResult>(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=25&langRestrict=en&filter=ebooks`
  );

  if (error) {
  }

  return <SearchResults items={data?.items ?? []} />;
};

Searcher.displayName = "Searcher";

export default React.memo(Searcher);
