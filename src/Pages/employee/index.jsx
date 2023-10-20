import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { columns } from '../../data';
import { useContext } from 'react';
import { AppContext } from '../../context';

function Employee() {
    const { donnees } = useContext(AppContext);
    const [searchText, setSearchText] = useState('');

    const formattedData = donnees.map((employee) => ({
        ...employee,
        DateofBirth: employee.DateofBirth.toDateString(),
        StartDate: employee.StartDate.toDateString(),
    }));

    const filteredData = formattedData.filter((employee) => {
        const values = Object.values(employee);
        for (const value of values) {
            if (value.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        }
        return false;
    });

    return (
        <main id="main-employee">
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <div className="centerTable">
                    {donnees.length > 0 ? (
                        <DataTable
                            title="Employee List"
                            columns={columns}
                            data={filteredData}
                            pagination
                            highlightOnHover
                            subHeader
                            subHeaderAlign="center"
                            subHeaderWrap
                            subHeaderComponent={
                                <div>
                                    <div className="flex-table-entries">
                                        <div>
                                            <span>Search: </span>
                                            <input
                                                type="text"
                                                value={searchText}
                                                onChange={(e) =>
                                                    setSearchText(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                            style={{ width: '50%' }}
                        />
                    ) : (
                        <p>No employee data available.</p>
                    )}
                </div>
                <Link to="/index">Home</Link>
            </div>
        </main>
    );
}

export default Employee;
