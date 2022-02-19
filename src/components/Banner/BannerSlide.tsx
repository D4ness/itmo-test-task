import React from 'react';
import ItmoButton from "../UI/button/ItmoButton";
import {Post} from './Banner';

const BannerSlide: React.FC<Post> = ({title, body}) => {
    return (
        <div className='banner__slide'>
            <h1 className='banner__slide-title'>
                {title}
            </h1>
            <div className='banner__slide-body'>
                {body}
            </div>
            <form>
                <ItmoButton>Подробнее</ItmoButton>
            </form>
        </div>

    );
};

export default BannerSlide;