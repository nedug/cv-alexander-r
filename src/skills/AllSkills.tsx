import React from 'react';
import s from './AllSkills.module.scss';
import SC from '../common/styles/Container.module.scss';
import Title from '../common/components/Title';


const AllSkills = () => {

    return (

        <div className={s.skillsBlock} id="skills">
            <div className={`${SC.container} ${s.skillsContainer}`}>

                <div className={s.skillsHeader}>
                    <Title title={'My development skills'} />
                </div>
                <div className={s.skills}>
                    <div>HTML</div>
                    <div>CSS + SСSS</div>
                    <div>JavaScript + TypeScript</div>
                    <div>React + REDUX + REDUX Toolkit</div>
                    <div>NODE.js (npm+yarn+npx)</div>
                    <div>GIT + GITHUB</div>
                    <div>OOP + MVC</div>
                    <div>UNIT TEST (TDD + Jest) + STORYBOOK</div>
                    <div>ESLint + Module CSS + Styled-components</div>
                </div>

                <div className={s.skillsHeader}>
                    <Title title={'My soft skills'} />
                </div>
                <ul className={s.softSkills}>
                    <li>Hardworking</li>
                    <li>Willingness to learn</li>
                    <li>Team work</li>
                    <li>Punctual</li>
                    <li>Diligent</li>
                </ul>
            </div>
        </div>
    );
};

export default AllSkills;