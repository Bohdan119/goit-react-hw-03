import PropTypes from "prop-types";

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search contacts..."
    />
  );
};

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
