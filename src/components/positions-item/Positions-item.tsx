import { FC} from "react";
import './Positions-item.css';

const PositionsItem : FC<{id: string, title: string, price: number, needIncrease: boolean,
    bestSeller: boolean, deleteItem: (id: string) => void, changeIncreaseOrSeller: (id: string, type: string) => void}> = 
    ({id, title, price, needIncrease = false, bestSeller = false, deleteItem, changeIncreaseOrSeller}) => {

    return (
        <li className={"list-group-item d-flex justify-content-between"
            + (needIncrease ? " increase" : "") + (bestSeller ? " like" : "")}>
            <span className="list-group-item-label"
                onClick={() => changeIncreaseOrSeller(id, 'like')}>
                {title}
            </span>
            <input type="text" name="price" className="list-group-item-input" defaultValue={`${price}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => changeIncreaseOrSeller(id, 'increase')}>
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