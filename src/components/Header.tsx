import React from 'react';
import logo from '../images/Header/itmo-logo.svg'
import flag from '../images/Header/united-kingdom.svg'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__content'>
                <img src={logo} alt='Логотип ИТМО'/>
                <div className='header__language'><span>En</span><img src={flag} alt='Флаг'/></div>
                </div>
            </div>
        </header>
    );
};

export default Header;