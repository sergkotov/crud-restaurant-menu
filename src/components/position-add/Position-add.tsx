import { FC } from "react";
import './Position-add.css';

const PositionAdd : FC = ()  => {
    return (
        <div className="app-add-form">
            <h3>Add new menu position</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Position title" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Price" />
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default PositionAdd;