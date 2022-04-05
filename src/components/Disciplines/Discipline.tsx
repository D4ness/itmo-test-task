import React, {useState} from 'react';
import './disciplines.css';
import {DisciplineType} from "./Disciplines";


const Discipline: React.FC<DisciplineType> = ({title,body}) => {
    const [content, setContent] = useState<string>('none');
    const [arrow, setArrow] = useState<string>('arrow-down');

    const changeDiscipleState: () => void = () => {
        if (content == 'block') {
            setContent(() => 'none');
            setArrow(()=>'arrow-down');
        }
        else if (content == 'none') {
            setContent(()=>'block');
            setArrow(()=>'arrow-up');
        }
    }
    return (
        <div className='discipline'>
            <div className='discipline__top'>
                <div className='discipline__header'>{title}</div>
                <div onClick={changeDiscipleState} style={{cursor:'pointer'}}>{arrow}</div>
            </div>
            <div className='discipline__content' style={{display: content}}>
                {body}
            </div>
        </div>
    );
};

export default Discipline;