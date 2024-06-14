import React from 'react';
import "./Header.css";

function Header({ handleSubmit, handleSortChange, searchTerm }) {
  return (
    <div className="header">
      <h1>Flixster</h1>
      <form className="header-form" onSubmit={handleSubmit}>
        <input htmlFor={searchTerm} name="search" className='search-bar'/>
        <button type="submit" className='search-button'>Submit</button>
      </form>
      <form className="filter">
        <label>
          Sort by:
          <select onChange={handleSortChange} defaultValue="">
            <option value="">Default</option>
            <option value="popularity.desc">Popularity Descending</option>
            <option value="release_date.desc">Release Date Descending</option>
            <option value="vote_average.desc">Rating Descending</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Header;
