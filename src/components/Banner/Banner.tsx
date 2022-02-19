import React, {useState} from 'react';
import './banner.css';
import BannerSlide from './BannerSlide';

export type Post = {
    title: string,
    body: string
}

const Banner: React.FC = () => {

    const [slides, setSlides] = useState<Post[]>([
        {
            title: 'Началась подача документов',
            body: 'Программа предполагает углубленное изучение вопросов, ' +
                'связанных с проектированием,исследованием, производством и эксплуатацией ' +
                'мехатронных и робототехнических систем и комплексов.',
        },
        {
            title: 'Началась подача документов 2',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maxime possimus repellendus ' +
                'reprehenderit voluptate? Ab, adipisci, aut corporis delectus, dolore ducimus in incidunt ipsum neque ' +
                'odio praesentium quae veritatis voluptatibus?',
        },
        {
            title: 'Началась подача документов 3',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maxime possimus repellendus ' +
                'reprehenderit voluptate? Ab, adipisci, aut corporis delectus, dolore ducimus in incidunt ipsum neque ' +
                'odio praesentium quae veritatis voluptatibus?',
        }
    ]);

    const [offsetX, setOffsetX] = useState<number>(0);

    const slideWidth: number = 1000;
    const maxOffset: number = -slideWidth * (slides.length - 1);

    const slideLeft: () => void = () => {
        setOffsetX(lastOffsetX => {
            const currentOffset: number = lastOffsetX + slideWidth;
            return currentOffset > 0 ? maxOffset : currentOffset;
        });
    };

    const slideRight: () => void = () => {
        setOffsetX(lastOffsetX => {
            const currentOffset: number = lastOffsetX - slideWidth;
            return currentOffset < maxOffset ? 0 : currentOffset;
        });
    };


    return (
        <section className='banner'>
            <div className='banner__arrow banner__arrow-prev' onClick={slideLeft}/>
            <div className='banner__content' style={{width: slideWidth + 'px'}}>
                <div className='banner__slider' style={{transform: `translateX(${offsetX}px)`,}}>
                    {slides.map(slide => <BannerSlide title={slide.title} body={slide.body}/>)}
                </div>
            </div>
            <div className='banner__arrow banner__arrow-next' onClick={slideRight}/>
        </section>
    );
};

export default Banner;