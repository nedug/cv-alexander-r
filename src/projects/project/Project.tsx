import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title:string
    description:string
    style: {}
}
const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.oneProjectBlock}>
            <div className={s.projectPic} style={props.style}>
                <div className={s.projectBtn}><a href="#">demo</a></div>
                <div className={s.projectBtn}><a href="#" >code</a> </div>
            </div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>
        </div>
    );
};

export default Project;