import React from 'react';
import './topBar.css';
import logo from '../../images/TopBar/lab_logo.svg';
import TopBarMenu from "./TopBarMenu";


const TopBar: React.FC = () => {
    return (
        <div className='wrapper'>
            <div className='top-bar'>
                <div className='top-bar__logo'>
                    <img src={logo} alt='Логотип'/>
                    <div className='top-bar__title'>Лаборатория робототехники</div>
                </div>
                <TopBarMenu/>
            </div>
        </div>
    );
};

export default TopBar;