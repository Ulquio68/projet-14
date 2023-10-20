import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modale({ fullName = '', onClose }) {
    return (
        <div className="modale">
            <div className="modale-content">
                <button className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} className="iconCross" />
                </button>
                <p>L'employé {fullName} a bien été créé!</p>
            </div>
        </div>
    );
}

export default Modale;
