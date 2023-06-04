import './SearchBar.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="SearchBar">
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
