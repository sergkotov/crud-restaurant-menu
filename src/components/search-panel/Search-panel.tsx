import { FC } from "react";
import './Search-panel.css';

const SearchPanel : FC = ()  => {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Find menu position"
        />
    )
}

export default SearchPanel;