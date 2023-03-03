import React, { useCallback, useEffect, useState } from "react";
import SearchBarInput from "./SearchBarInput";
import { watches } from "./utils/products";
const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let textquery = query.trim().toLowerCase();
      let newSuggestions = watches.filter((item) => {
        return item.title.toLowerCase().indexOf(textquery) !== -1
          ? true
          : false;
      });
      setSuggestions(newSuggestions);
    }
  }, [query]);
  return (
    <div>
      <h3
        style={{
          marginLeft: "170px",
          color: "darkgreen",
          fontWeight: "normal",
        }}>
        Search
      </h3>
      <SearchBarInput queryHandler={queryHandler} suggestions={suggestions} />
    </div>
  );
};

export default Search;
