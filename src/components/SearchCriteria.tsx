import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchCriteriaParams, SearchModifier } from '../types/search';
import { encodeQuery, decodeQuery } from '../utils/encodings';

const SearchCriteria: React.FC = () => {
  const navigate = useNavigate();
  const { query, field } = useParams() as SearchCriteriaParams;

  const [criteria, setCriteria] = React.useState(
    () => decodeQuery(query) ?? ''
  );
  const [modifier, setModifier] = React.useState<SearchModifier>(
    () => field ?? 'intitle'
  );

  React.useEffect(() => {
    const decodedQuery = decodeQuery(query);
    if (decodedQuery) {
      setCriteria(decodedQuery);
    }
    if (field) {
      setModifier(field);
    }
  }, [query, field]);

  return (
    <form
      className="input-group"
      style={{ margin: '12px 0' }}
      onSubmit={(e) => {
        e.preventDefault();
        if (criteria) {
          const query = encodeQuery(criteria);

          navigate(`/search/${modifier}/${query}`);
        }
      }}
    >
      <input
        autoFocus
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        className="form-control shadow-none w-75"
        aria-label="Query"
      />
      <select
        value={modifier}
        onChange={(e) => setModifier(e.target.value as SearchModifier)}
        className="form-select shadow-none"
        aria-label="Search where"
      >
        <option value="everywhere">Everywhere</option>
        <option value="intitle">Title</option>
        <option value="inauthor">Author</option>
        <option value="subject">Subject</option>
      </select>
      <button
        className="btn btn-outline-primary shadow-none"
        disabled={!criteria}
      >
        Search
      </button>
    </form>
  );
};

SearchCriteria.displayName = 'SearchCriteria';

export default SearchCriteria;
