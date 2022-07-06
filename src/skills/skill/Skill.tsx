import React from 'react';
import s from './Skill.module.scss'
import {Icon} from "../../common/icons/Icon";

type SkillPropsType = {
    title:string
    iconName:string
}
const Skill = (props:SkillPropsType) => {
     return <>
        <div className={s.skill}>
            <div className={s.skillLogo}>
                <Icon icon={props.iconName}  />
            </div>
            <div className={s.skillTitle}>
                <span>{props.title}</span>
                {/*<span className={s.skillPercentage}>80%</span>*/}
            </div>
            {/*<div className={s.skillLoader}></div>*/}
            {/*<div className={s.bar}>*/}
            {/*    <div className={s.barFill} data-percent="80%" ></div>*/}
            {/*</div>*/}

        </div>
    </>;

};

export default Skill;