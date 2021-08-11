import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        // Prevenir el evento de refresh del navegador
        e.preventDefault();
        //console.log("Evento enter");
        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue,...categories]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}