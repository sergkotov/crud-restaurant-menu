import { FC } from "react"

const AppFilter : FC = ()  => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                All positions
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                Increase the cost
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                costs more than 10$
            </button>
        </div>
    )
}

export default AppFilter;