import { FC } from "react";
import './Positions-list.css';
import PositionsItem from "../positions-item/Positions-item";
import { MenuItem } from "../../shared/types/restaurantTypes";

const PositionsList : FC<{items: MenuItem[], deleteItem: (id: string) => void, changeIncreaseOrSeller: (id: string, type: string) => void}> = 
({items, deleteItem, changeIncreaseOrSeller})  => {
    return (
        <ul className="app-list list-group">
            {items.map((item) => (
                <PositionsItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    needIncrease={item.needIncreasePrice}
                    bestSeller={item.bestSeller}
                    deleteItem={deleteItem}
                    changeIncreaseOrSeller={changeIncreaseOrSeller}
                />
            ))}
        </ul>
    )
}

export default PositionsList;