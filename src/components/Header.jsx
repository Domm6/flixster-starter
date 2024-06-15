import React from 'react';
import "./Header.css";

function Header({ handleSubmit, handleSortChange, searchTerm }) {
  return (
    <div className="header">
      <div className='header-title'>
        <h1>Flixster</h1>
      </div>
      <div className='header-body'>
        <form className="header-form" onSubmit={handleSubmit}>
          <input htmlFor={searchTerm} name="search" className='search-bar' placeholder='Search for a movie...'/>
          <button type="submit" className='search-button'>Submit</button>
        </form>
        <form className="filter">
          <label>
            Sort by:
            <select onChange={handleSortChange} defaultValue="" className='filter-select'>
              <option value="">Now Playing</option>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="vote_average.desc">Rating Descending</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Header;
