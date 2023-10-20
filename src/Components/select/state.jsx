import React from 'react';
import './index.css';
import { states } from '../../data';
import Select from 'react-select';

function StateSelect({ value, setValue }) {
    const stateOptions = states.map((state) => ({
        value: state.abbreviation,
        label: state.name,
    }));

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '0',
            boxShadow: 'none',
            color: 'black',
            '&:hover': {
                backgroundColor: 'lightgray',
                border: '1px solid darkgray',
            },
        }),
    };

    return (
        <div className="state-select-container">
            <Select
                value={stateOptions.find((option) => option.value === value)}
                onChange={(selectedOption) => {
                    if (setValue) {
                        setValue(selectedOption.value);
                    }
                }}
                options={stateOptions}
                styles={customStyles}
            />
        </div>
    );
}

export default StateSelect;
