import { ChangeEvent, FC, FormEvent, useState } from "react";
import './Position-add.css';
import { MenuItem } from "../../shared/types/restaurantTypes";

const PositionAdd : FC<{maxId: string, changeMaxId: (currMax: string) => void, addPosition: (item: MenuItem) => void}> = 
    ({maxId, changeMaxId, addPosition})  => {
    const [inputs, setInputs] = useState({title: '', price: 0});

    function onValueChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        let updatedValue = {}
        if(e.target.name === 'price') {
            updatedValue = {price: (+e.target.value > 0 ? +e.target.value : 0)};
            setInputs(state => ({
                ...state,
                ...updatedValue
            }))
        } else {
            updatedValue = {title: e.target.value}
            setInputs(state => ({
                ...state,
                ...updatedValue
            }))
        }
    }

    function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(inputs.title) {
            changeMaxId(maxId);
            addPosition({
                id: String(+maxId + 1),
                title: inputs.title,
                price: inputs.price,
                needIncreasePrice: false
            });
        }
    }

    return (
        <div className="app-add-form">
            <h3>Add new menu position</h3>
            <form
                className="add-form d-flex"
                onSubmit={(e) => onFormSubmit(e)}>
                <input type="text"
                    name="title"
                    className="form-control new-post-label"
                    onChange={(e) => onValueChange(e)}
                    value={inputs.title}
                    placeholder="Position title" />
                <input type="number"
                    name="price"
                    className="form-control new-post-label"
                    onChange={(e) => onValueChange(e)}
                    value={String(inputs.price)}
                    placeholder="Price" />
                <button type="submit"
                    className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    )
}

export default PositionAdd;