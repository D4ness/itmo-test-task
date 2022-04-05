import React from 'react';
import './news.css';
import NewsCard from "./NewsCard";

const News: React.FC = () => {
    return (
        <div className='small-wrapper'>
            <section className='news'>
                <h2 className='news__title'>Новости и события</h2>
                <div className='news__cards'>
                    <NewsCard/>
                    <NewsCard/>
                </div>
            </section>
        </div>
    );
};

export default News;