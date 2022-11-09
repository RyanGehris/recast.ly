const {useState} = React;

var Search = (props) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    props.handleSearchInputChange(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
