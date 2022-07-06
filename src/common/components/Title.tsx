import React from 'react';
import s from './Title.module.scss'


type TitlePropsType = {
    title:string
}
const Title = (props:TitlePropsType) => {
    return (
   <p className={s.title}>{props.title}</p>
    );
};

export default Title;