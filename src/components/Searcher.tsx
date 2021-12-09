import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';

import { QueryResult } from '../types/books';
import SearchResults from './SearchResults';
import getQueryPrefix from '../utils/getQueryPrefix';
import { SearchCriteriaParams } from '../types/search';

const Searcher: React.FC = () => {
  const { query, field } = useParams() as SearchCriteriaParams;
  const q = `${getQueryPrefix(field)}${query}`;
  const { data } = useSWR<QueryResult>(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=25&langRestrict=en&filter=ebooks`
  );

  return <SearchResults items={data?.items ?? []} />;
};

Searcher.displayName = 'Searcher';

export default React.memo(Searcher);
