import React from 'react';
import s from './Nav.module.scss'

type NavPropsType = {
    onClose:()=>void
}
const Nav = (props:NavPropsType) => {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <a href='#main' onClick={props.onClose}>Main</a>
                </li>
                <li>
                    <a href='#skills' onClick={props.onClose}>Skills</a>
                </li>
                <li>
                    <a href='#projects' onClick={props.onClose}>Projects</a>
                </li>
                <li>
                    <a href='#aboutMe' onClick={props.onClose}>About me</a>
                </li>
                <li>
                    <a href='#contacts' onClick={props.onClose}>Contacts</a>
                </li>

            </ul>
        </div>
    );
};

export default Nav;