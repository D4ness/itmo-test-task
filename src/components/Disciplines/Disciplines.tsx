import React from 'react';
import Discipline from "./Discipline";
import './disciplines.css';
import BannerSlide from "../Banner/BannerSlide";

export type DisciplineType = {
    title: string,
    body: string
}

const Disciplines: React.FC = () => {

    const disciplineList: DisciplineType[] = [
        {
            title: 'Алгоритмы',
            body: 'Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического' +
                'управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы,' +
                ' связанные с конструктивными и схемными решениями современных измерительных преобразователей ' +
                'параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, ' +
                'как элементам систем автоматики.'
        },
        {
            title: 'Мехатроника',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maxime possimus repellendus ' +
                'reprehenderit voluptate? Ab, adipisci, aut corporis delectus, dolore ducimus in incidunt ipsum neque ' +
                'odio praesentium quae veritatis voluptatibus?',
        },
        {
            title: 'Силовые машины',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maxime possimus repellendus ' +
                'reprehenderit voluptate? Ab, adipisci, aut corporis delectus, dolore ducimus in incidunt ipsum neque ' +
                'odio praesentium quae veritatis voluptatibus?',
        },
        {
            title: 'Фотоника и радиоэлектроника',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium maxime possimus repellendus ' +
                'reprehenderit voluptate? Ab, adipisci, aut corporis delectus, dolore ducimus in incidunt ipsum neque ' +
                'odio praesentium quae veritatis voluptatibus?',
        },
        {
            title: 'Робототехника',
            body: 'Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического' +
                'управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы,' +
                ' связанные с конструктивными и схемными решениями современных измерительных преобразователей ' +
                'параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, ' +
                'как элементам систем автоматики.'
        }
    ];

    return (
        <div className='small-wrapper disciplines'>
            <div className='disciplines__header'>Дисциплины</div>
            <div className='disciplines__list'>
                {disciplineList.map(discipline => <Discipline title={discipline.title} body={discipline.body}/>)}
            </div>
        </div>
    );
};

export default Disciplines;