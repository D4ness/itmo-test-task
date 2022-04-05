import React from 'react';
import newsPhoto from '../../images/News/news1_full.png';

const NewsCard: React.FC = () => {
    return (
        <div className='news__card'>
            <div>
                <img className='news__card__photo' src={newsPhoto} alt='Фото новости'/>
                <div className='news__card__middle'>
                    <div className='news__card__date'>2 декабря 2019</div>
                    <div className='news__card__social'>Вконтакте</div>
                </div>
                <div className='news__card__body'>
                    Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого
                    и нечеловеческого, представленный на Кураторском форуме в Молодёжный...
                </div>
            </div>
        </div>
    );
};

export default NewsCard;