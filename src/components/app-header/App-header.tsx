import { FC } from "react";
import './App.css';

const AppHeader : FC = ()  => {
    return (
        <div className="app-header">
            <h1>Restaurant menu</h1>
            <h2>All menu positions:</h2>
            <h2>Positions in the current menu:</h2>
        </div>
    )
}

export default AppHeader;