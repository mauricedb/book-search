import React from "react";
import { SearchModifier, SearchInput } from "../types/books";

type Props = {
  search: (value: SearchInput) => void;
};

const SearchCriteria: React.FC<Props> = ({ search }) => {
  const [criteria, setCriteria] = React.useState("Douglas Adams");
  const [modifier, setModifier] = React.useState<SearchModifier>("intitle");

  return (
    <form
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        search({ criteria, modifier });
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
          <option value="none">Everywhere</option>
          <option value="intitle">Title</option>
          <option value="inauthor">Author</option>
          <option value="subject">Subject</option>
        </select>
        <button className="btn btn-primary shadow-none">Search</button>
      </div>
    </form>
  );
};

SearchCriteria.displayName = "SearchCriteria";

export default SearchCriteria;
