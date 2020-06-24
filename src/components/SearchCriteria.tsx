import React from "react";

type Props = {
  search: (value: string) => void;
  disabled: boolean;
};

const SearchCriteria: React.FC<Props> = ({ search, disabled }) => {
  const [criteria, setCriteria] = React.useState("Douglas Adams");

  return (
    <form
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        search(criteria);
      }}
    >
      <input
        autoFocus
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        disabled={disabled}
        className="form-control shadow-none"
      />
      <div className="input-group-append">
        <button disabled={disabled} className="btn btn-primary shadow-none">
          Search
        </button>
      </div>
    </form>
  );
};

SearchCriteria.displayName = "SearchCriteria";

export default SearchCriteria;
