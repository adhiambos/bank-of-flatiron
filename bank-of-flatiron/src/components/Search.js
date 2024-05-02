import React, { useState } from 'react';

function Search() {
const [searchInput, setSearchInput] = useState('');

const handleSearchChange = (event) => {
setSearchInput(event.target.value);
};

const handleSearchSubmit = () => {
console.log('Search submitted:', searchInput);
};

return (
<form className='search'>
<input
type="text"
value={searchInput}
onChange={handleSearchChange}
placeholder="Search Transaction"
/>
<button onClick={handleSearchSubmit}>Search</button>
</form>
);
}

export default Search;

