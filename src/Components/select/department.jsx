import React from 'react';
import './index.css';
import { departments } from '../../data';
import Select from 'react-select';

function DepartmentSelect({ value, setValue }) {
    const depOptions = departments.map((department) => ({
        value: department.name,
        label: department.name,
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
        <div className="department-select-container">
            <Select
                value={depOptions.find((option) => option.value === value)}
                onChange={(selectedOption) => {
                    if (setValue) {
                        setValue(selectedOption.value);
                    }
                }}
                options={depOptions}
                styles={customStyles}
            />
        </div>
    );
}

export default DepartmentSelect;
