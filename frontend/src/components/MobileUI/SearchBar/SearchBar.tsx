import './SearchBar.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
