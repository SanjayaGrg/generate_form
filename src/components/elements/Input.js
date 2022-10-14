import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Input = ({ id, label, placeholder, required, value }) => {

    const { handleChange } = useContext(FormContext);
    return (
        <div>
            <label style={{ fontWeight: "bold" }}>{label}</label>
            <input type="text"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                required={required}
                onChange={event => handleChange(id, event)}
                style={{ margin: '10px 10px', padding: 4, borderRadius: '10px' }}
            />
            {/* <div className='form-text'>Your Information are secured.</div> */}
        </div>
    )
}

export default Input