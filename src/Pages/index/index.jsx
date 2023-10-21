import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import StateSelect from '../../Components/select/state';
import DepartmentSelect from '../../Components/select/department';
import Modale from 'component-modal-grst/dist/modale';
import DatePicker from 'react-datepicker';
import { AppContext } from '../../context';

function Home() {
    const [isModaleOpen, setIsModaleOpen] = useState(false);
    const { donnees, setDonnees } = useContext(AppContext);

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [DateofBirth, setDateOfBirth] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [Street, setStreet] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState(0);
    const [ZipCode, setZipCode] = useState('');
    const [Department, setDepartment] = useState('');

    const openModale = () => {
        setIsModaleOpen(true);
    };
    const closeModale = () => {
        setIsModaleOpen(false);
        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setStartDate('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setDepartment('');
    };

    function isFormValid() {
        return (
            FirstName !== '' &&
            LastName !== '' &&
            DateofBirth !== '' &&
            StartDate !== '' &&
            Street !== '' &&
            City !== '' &&
            State !== '' &&
            ZipCode !== '' &&
            Department !== ''
        );
    }

    function saveEmployee(e) {
        e.preventDefault();

        if (isFormValid()) {
            openModale();
            const employeeData = {
                FirstName,
                LastName,
                DateofBirth: new Date(DateofBirth),
                StartDate: new Date(StartDate),
                Street,
                City,
                State,
                ZipCode,
                Department,
            };
            setDonnees([...donnees, employeeData]);
        } else {
            alert(
                "Le formulaire n'est pas valide. Veuillez remplir tous les champs obligatoires."
            );
        }
    }

    return (
        <main id="main">
            <div className={isModaleOpen ? 'overlay' : ''}></div>
            {isModaleOpen && (
                <Modale
                    fullName={FirstName + ' ' + LastName}
                    onClose={closeModale}
                    backgroundColor="#ffcc00"
                    textColor="#333"
                />
            )}
            <h1>HRnet</h1>
            <Link to="/employee-list">View current Employees</Link>
            <h2>Create Employee</h2>

            <form id="form">
                <div className="center-content">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <p className="dateTable">Date of Birth</p>
                    <DatePicker
                        selected={DateofBirth}
                        onChange={(date) => {
                            setDateOfBirth(date);
                        }}
                        placeholderText="Select a date of birth"
                        id="date-of-birth"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={50}
                        required
                    />

                    <p className="dateTable">Start Date</p>
                    <DatePicker
                        selected={StartDate}
                        onChange={(date) => {
                            setStartDate(date);
                        }}
                        placeholderText="Select a date of start"
                        id="date-of-start"
                        required
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            value={Street}
                            type="text"
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            value={City}
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />

                        <label htmlFor="state-button">State</label>
                        <StateSelect
                            key={isModaleOpen}
                            value={State}
                            setValue={setState}
                            required
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            value={ZipCode}
                            type="number"
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                        />
                    </fieldset>

                    <label htmlFor="department-button">Department</label>
                    <DepartmentSelect
                        key={isModaleOpen}
                        value={Department}
                        setValue={setDepartment}
                        required
                    />
                    <button
                        id="buttonSave"
                        type="submit"
                        onClick={saveEmployee}
                    >
                        Save
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Home;
