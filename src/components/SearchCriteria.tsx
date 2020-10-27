import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SearchCriteriaParams, SearchModifier } from '../types/search';

const SearchCriteria: React.FC = () => {
  const history = useHistory();
  const { query, field } = useParams<SearchCriteriaParams>();

  const [criteria, setCriteria] = React.useState(
    () => query?.replace(/\+/g, ' ') ?? "The Hitchhiker's Guide to the Galaxy" // "Douglas Adams"
  );
  const [modifier, setModifier] = React.useState<SearchModifier>(
    () => field ?? 'intitle'
  );

  return (
    <form
      className="input-group"
      style={{ margin: '12px 0' }}
      onSubmit={(e) => {
        e.preventDefault();
        if (criteria) {
          const query = criteria.replace(/ /g, '+');

          history.push(`/search/${modifier}/${query}`);
        }
      }}
    >
      <input
        autoFocus
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        className="form-control shadow-none"
      />
      <div className="input-group-append">
        <select
          value={modifier}
          onChange={(e) => setModifier(e.target.value as SearchModifier)}
          className="form-control shadow-none"
        >
          <option value="everywhere">Everywhere</option>
          <option value="intitle">Title</option>
          <option value="inauthor">Author</option>
          <option value="subject">Subject</option>
        </select>
        <button className="btn btn-primary shadow-none" disabled={!criteria}>
          Search
        </button>
      </div>
    </form>
  );
};

SearchCriteria.displayName = 'SearchCriteria';

export default SearchCriteria;
