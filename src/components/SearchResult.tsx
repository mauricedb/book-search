import React, { Fragment } from 'react';
import { htmlUnescape } from 'escape-goat';
import { Item } from '../types/books';
import { Link } from 'react-router-dom';
import { encodeQuery } from '../utils/encodings';

type Props = { item: Item };

const SearchResult: React.FC<Props> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div id={item.id} className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src={item.volumeInfo.imageLinks?.thumbnail}
            className="card-img"
            alt={item.volumeInfo.title}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">
                <Link
                  to={`/search/intitle/${item.volumeInfo.title.replace(
                    / /g,
                    '+'
                  )}`}
                >
                  {item.volumeInfo.title}
                </Link>
              </h5>
              <button
                className="btn shadow-none pull-right"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? '▲' : '▼'}
              </button>
            </div>
            <p className="card-text card-description">
              {htmlUnescape(
                (expanded
                  ? item.volumeInfo.description ?? item.searchInfo?.textSnippet
                  : item.searchInfo?.textSnippet) ?? ''
              )}
            </p>
            <p className="card-text card-author">
              {item.volumeInfo.authors?.map((author, index) => (
                <Fragment key={index}>
                  <Link to={`/search/inauthor/${encodeQuery(author)}`}>
                    {author}
                  </Link>
                  {index + 1 < (item.volumeInfo.authors?.length ?? 0)
                    ? ', '
                    : ''}
                </Fragment>
              ))}
            </p>
            {expanded && (
              <>
                <p className="card-text">
                  <small className="text-muted">
                    Categories:&nbsp;
                    {item.volumeInfo.categories?.join(', ')}
                  </small>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResult.displayName = 'SearchResult';

export default SearchResult;
