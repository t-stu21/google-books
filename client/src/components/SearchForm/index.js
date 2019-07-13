import React from "react";
import "./style.css";

function SearchForm({ children }) {
  return (
    <div className="container">
      <form className="form-inline">
        {children}
      </form>
    </div>
  );
}

export default SearchForm;
