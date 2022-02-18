import React from 'react';
import './header.css'
import logo from '../../images/Header/itmo-logo.svg'
import flagEn from '../../images/Header/united-kingdom.svg'
import flagRu from '../../images/Header/united-kingdom.svg'

interface HeaderProps {
    language: string;
}

const Header: React.FC<HeaderProps> = ({language}) => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__content'>
                    <img src={logo} alt='Логотип ИТМО'/>
                    <div className='header__language'><span>{language}</span><img
                        src={language === 'En' ? flagEn : flagRu} alt='Флаг'/></div>
                </div>
            </div>
        </header>
    );
};

export default Header;