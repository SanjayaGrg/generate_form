import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Select = ({ type, id, label, placeholder, required, value, options }) => {
    const { handleChange } = useContext(FormContext);
    return (
        <>
            <label style={{ fontWeight: "bold" }}>{label}</label>
            <select
                // className='form-select' 
                required={required}
                style={{ marginLeft: 14, marginBottom: 10, padding: 4 }}
                onChange={event => handleChange(id, event)}>
                <option>{placeholder} </option>
                {
                    options.length > 0 && options.map((option, i) =>
                        <option value={option.option_label} key={i}>{option.option_label}</option>
                    )
                }
            </select>
        </>

    )
}

export default Select