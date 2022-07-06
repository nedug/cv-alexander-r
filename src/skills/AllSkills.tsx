import React from 'react';
import s from './AllSkills.module.scss';
import SC from '../common/styles/Container.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";


const AllSkills = () => {

    return (

        <div className={s.skillsBlock} id = 'skills'>

            <div className={`${SC.container} ${s.skillsContainer}`}>
                <div className={s.skillsHeader}>
                    <Title title={'My hard skills'}/>
                    <span>
                        Here are technologies I have got most experience with:
                     </span>
                </div>
                <div className={s.skills}>
                    <Skill title={'HTML5'} iconName={'html5'}/>
                    <Skill title={'CSS'} iconName={'css3'}/>
                    <Skill title={'Sass'} iconName={'sass'}/>
                    <Skill title={'JavaScript'} iconName={'javascript'}/>
                    <Skill title={'TypeScript'} iconName={'typescript'}/>
                    <Skill title={'React'} iconName={'react'}/>
                    <Skill title={'React-redux'} iconName={'redux'}/>
                    <Skill title={'Storybook'} iconName={'storybook'}/>
                    <Skill title={'GIT'} iconName={'github'}/>
                    <Skill title={"Bootstrap"} iconName={"bootstrap"}/>
                    <Skill title={"Firebase"} iconName={"firebase"}/>
                    <Skill title={"Formik"} iconName={"formik"}/>
                </div>
                <div className={s.skillsHeader}>
                    <Title title={'My soft skills'}/>
                </div>
                <div className={s.softSkills}>
                    <Skill title={'Team work'} iconName={"teamwork-svgrepo-com"}/>
                    <Skill title={'Empathy'} iconName={"empathy"}/>
                    <Skill title={'Willingness to learn'} iconName={"study"}/>
                    <Skill title={'Reliability'} iconName={"reliability"}/>
                    <Skill title={'Adaptability'} iconName={"adaptation"}/>
                    <Skill title={'Open-mindness'} iconName={"open-mind"}/>
                </div>
            </div>
        </div>
    );
};

export default AllSkills;