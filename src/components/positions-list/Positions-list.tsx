import { FC } from "react";
import './Positions-list.css';
import PositionsItem from "../positions-item/Positions-item";

const PositionsList : FC = ()  => {
    return (
        <ul className="app-list list-group">
            <PositionsItem/>
        </ul>
    )
}

export default PositionsList;