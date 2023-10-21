import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Modale({
    fullName = '',
    onClose,
    backgroundColor,
    textColor,
}) {
    const modaleStyles = {
        backgroundColor: backgroundColor || '#fff',
        color: textColor || '#000',
    };

    return (
        <div className="modale" style={modaleStyles}>
            <div className="modale-content">
                <button className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} className="iconCross" />
                </button>
                <p style={{ color: textColor }}>
                    L'employé {fullName} a bien été créé!
                </p>
            </div>
        </div>
    );
}
