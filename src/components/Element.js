import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Checkbox from './elements/Checkbox';

const Element = ({ field: { type, id, label, placeholder, required, value, options } }) => {
    switch (type) {
        case 'text':
            return (<Input
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                required={required}
            />)

        case 'select':
            return (<Select
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                options={options}
                required={required}
            />)

        case 'checkbox':
            return (<Checkbox
                id={id}
                label={label}
                value={value}
            />)

        default:
            return null;
    }
    return (
        <div>
            element
        </div>
    )
}

export default Element