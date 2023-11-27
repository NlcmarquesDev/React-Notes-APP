import * as Icon from "react-bootstrap-icons";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <Icon.Search size={20} className="search-icons" />
      <input
        type="text"
        className="search-icons__icon"
        placeholder="Search by title ..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
