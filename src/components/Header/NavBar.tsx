import React from 'react';
import './navBar.css';
import logo from '../../images/Header/lab-logo.svg';

const NavBar: React.FC = () => {
    const menuBtn:string[] = [    // Мб, еще href потом добавлю
        'О лаборатории',
        'Учебная деятельность',
        'Научная деятельность',
        'Новости',
        'Контакты'
    ];
    return (
            <div className='nav-bar'>
                <div className='nav-bar__logo'>
                    <img src={logo} alt='Логотип'/>
                    <div className='nav-bar__title'>Лаборатория робототехники</div>
                </div>
                <ul className='nav-bar__buttons'>
                    {menuBtn.map(btn =>
                        <a href='#' className='nav-bar__button'>{btn}</a>
                    )}
                </ul>
            </div>
    );
};

export default NavBar;