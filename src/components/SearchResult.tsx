import React from "react";
import { Item } from "../types/books";

type Props = { item: Item };

const SearchResult: React.FC<Props> = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src={item.volumeInfo.imageLinks?.thumbnail}
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{item.volumeInfo.title}</h5>
            <p className="card-text">{item.searchInfo?.textSnippet}</p>
            <p className="card-text">
              <small className="text-muted">
                {item.volumeInfo.authors?.join(", ")}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResult.displayName = "SearchResult";

export default SearchResult;
