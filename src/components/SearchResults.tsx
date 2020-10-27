import React from 'react';
import SearchResult from './SearchResult';
import { Item } from '../types/books';

type Props = { items: Item[] };

const SearchResults: React.FC<Props> = ({ items }) => (
  <div>
    {items.map((item) => (
      <SearchResult key={item.id} item={item} />
    ))}
  </div>
);

SearchResults.displayName = 'SearchResults';

export default SearchResults;
