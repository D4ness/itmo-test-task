import React, {useState} from 'react';

const TopBarMenu: React.FC = () => {
    const menuBtn:string[] = [    // Мб, еще href потом добавлю
        'О лаборатории',
        'Учебная деятельность',
        'Научная деятельность',
        'Новости',
        'Контакты'
    ];
    return (
        <ul className='top-bar__buttons'>
            {menuBtn.map(btn =>
                <a href='#' className='top-bar__button'>{btn}</a>
            )}
        </ul>
    );
};

export default TopBarMenu;