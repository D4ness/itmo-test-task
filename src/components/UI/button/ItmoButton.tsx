import React from 'react';
import './itmo-button.css';

const ItmoButton: React.FC = ({children}) => {
    return (
        <button className='itmo-button'>
            {children}
        </button>
    );
};

export default ItmoButton;