import { FC, useState, MouseEvent } from "react";

const btns = [
    {name: "all", label:"All positions"},
    {name: "increase", label:"Increase the cost"},
    {name: "price", label:"Costs more than 10$"}
]

const AppFilter : FC<{updateFilter: (type: string) => void}> = ({updateFilter})  => {
    const [filter, setFilter] = useState('all');

    function onChangeFilterClick(e: MouseEvent<HTMLButtonElement>, type: string) {
        e.preventDefault();
        setFilter(type);
        updateFilter(type);
    }

    return (
        <div className="btn-group">
            {btns.map(item => 
                <button
                    key={item.name}
                    className={"btn " + (filter===item.name ? "btn-light" : "btn-outline-light")}
                    type="button"
                    onClick={(e) => {onChangeFilterClick(e, item.name)}}>
                    {item.label}
                </button>
            )}
        </div>
    )
}

export default AppFilter;