import { FC, useState, MouseEvent } from "react"

const AppFilter : FC<{updateFilter: (type: string) => void}> = ({updateFilter})  => {
    const [filter, setFilter] = useState('all');

    function onChangeFilterClick(e: MouseEvent<HTMLButtonElement>, type: string) {
        e.preventDefault();
        setFilter(type);
        updateFilter(type);
    }

    return (
        <div className="btn-group">
            <button 
                className={"btn " + (filter==="all" ? "btn-light" : "btn-outline-light") }
                type="button"
                onClick={(e) => {onChangeFilterClick(e, "all")}}>
                All positions
            </button>
            <button 
                className={"btn " + (filter==="increase" ? "btn-light" : "btn-outline-light") }
                type="button"
                onClick={(e) => {onChangeFilterClick(e, "increase")}}>
                Increase the cost
            </button>
            <button 
                className={"btn " + (filter==="price" ? "btn-light" : "btn-outline-light") }
                type="button"
                onClick={(e) => {onChangeFilterClick(e, "price")}}>
                costs more than 10$
            </button>
        </div>
    )
}

export default AppFilter;