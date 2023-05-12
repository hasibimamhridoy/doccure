import React from 'react';
import SearchCountries from './SearchCountries';

const Search = () => {
    return (
        <div>
            <div className="search h-24 flex justify-center gap-5 items-center bg-[#15558d]">
                
                <SearchCountries></SearchCountries>
                <button className="btn btn-success text-white px-9 rounded-sm">Search</button>

            </div>
        </div>
    );
};

export default Search;