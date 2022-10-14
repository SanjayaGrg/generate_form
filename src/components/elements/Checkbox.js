import React, { useContext } from 'react';
import { FormContext } from '../../FormContext';

const Checkbox = ({ id, label, value }) => {
    const { handleChange } = useContext(FormContext);
    return (
        <div>
            <input
                style={{ marginLeft: '-120px' }}
                type="checkbox" checked={value} onChange={event => handleChange(id, event)} />
            <label style={{ fontWeight: "bold", textAlign: 'left', marginLeft: '-130px' }} className="form-check-label">{label}</label>
        </div>
    )
}

export default Checkbox