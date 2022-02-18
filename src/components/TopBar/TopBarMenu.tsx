import React, {useState} from 'react';

const TopBarMenu: React.FC = () => {
    const [menuBtn, setMenuBtn] = useState<string[]>([
        'О лаборатории',
        'Учебная деятельность',
        'Научная деятельность',
        'Новости',
        'Контакты'
    ]);
    return (
        <ul className='top-bar__buttons'>
            {menuBtn.map(btn =>
                <a href='#' className='top-bar__button'>{btn}</a>
            )}
        </ul>
    );
};

export default TopBarMenu;