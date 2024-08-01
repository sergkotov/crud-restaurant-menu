import { ChangeEvent, FC, useState } from "react";
import './Search-panel.css';

const SearchPanel : FC<{updateSearch: (str: string) => void}> = ({updateSearch})  => {
    const [searchStr, setSearchStr] = useState('');

    function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const searchValue = e.target.value;
        setSearchStr(searchValue);
        updateSearch(searchValue);
    }

    return (
        <input 
            type="text"
            name="search"
            className="form-control search-input"
            placeholder="Find menu position"
            value={searchStr}
            onChange={(e) => onSearchChange(e)}
        />
    )
}

export default SearchPanel;