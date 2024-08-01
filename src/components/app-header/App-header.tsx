import { FC } from "react";
import './App-header.css';

const AppHeader : FC<{totalPositions: number, bestSellerPositions: number}> = (info)  => {
    return (
        <div className="app-header">
            <h1>Restaurant menu</h1>
            <h2>{"All menu positions: " + info.totalPositions}</h2>
            <h2>{"Best sellers: " + info.bestSellerPositions}</h2>
        </div>
    )
}

export default AppHeader;