import { FC, useState } from "react";
import './Positions-item.css';

const PositionsItem : FC<{id: string, title: string, price: number, needIncrease: boolean, deleteItem: (id: string) => void}> = 
    ({id, title, price, needIncrease = false, deleteItem}) => {
    const [increase, setIncrease] = useState(needIncrease);
    const [likePosition, setLikePosition] = useState(false);

    function onIncreaseClick () {
        setIncrease(prevState => !prevState);
    }

    function onLikeClick() {
        setLikePosition(prevState => !prevState);
    }

    return (
        <li className={"list-group-item d-flex justify-content-between"
            + (increase ? " increase" : "") + (likePosition ? " like" : "")}>
            <span className="list-group-item-label"
                onClick={onLikeClick}>
                {title}
            </span>
            <input type="text" name="price" className="list-group-item-input" defaultValue={`${price}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onIncreaseClick}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => deleteItem(id)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default PositionsItem;