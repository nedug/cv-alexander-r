import React from 'react';
import { motion } from 'framer-motion';
import s from './AllSkills.module.scss';
import SC from '../common/styles/Container.module.scss';
import Title from '../common/components/Title';


const AllSkills = () => {
    const animation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }),
    };
    const animationSkills = {
        hidden: {
            x: 250,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 }
        }),
    };
    const animationSkills2 = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }),
    };

    return (

        <div
            className={s.skillsBlock} id="skills">
            <div className={`${SC.container} ${s.skillsContainer}`}>

                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1, once: true }}
                            custom={1} variants={animation}
                            className={s.skillsHeader}>
                    <Title title={'My development skills'} />
                </motion.div>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1, once: true }}
                            className={s.skills}>
                    <motion.div custom={1} variants={animationSkills}>HTML</motion.div>
                    <motion.div custom={2} variants={animationSkills}>CSS + SСSS</motion.div>
                    <motion.div custom={3} variants={animationSkills}>JavaScript + TypeScript</motion.div>
                    <motion.div custom={4} variants={animationSkills}>React + REDUX + REDUX Toolkit</motion.div>
                    <motion.div custom={5} variants={animationSkills}>NODE.js (npm, yarn, npx) + JSON Server</motion.div>
                    <motion.div custom={6} variants={animationSkills}>GIT + GITHUB</motion.div>
                    <motion.div custom={7} variants={animationSkills}>AXIOS + REST API + POSTMAN</motion.div>
                    <motion.div custom={8} variants={animationSkills}>OOP + MVC</motion.div>
                    <motion.div custom={9} variants={animationSkills}>UNIT TEST (TDD, Jest) + STORYBOOK</motion.div>
                    <motion.div custom={9.7} variants={animationSkills}>ESLint + Module CSS + Styled-components</motion.div>
                    <motion.div custom={10.4} variants={animationSkills}>React router + Framer-motion + Ramda + Material UI</motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: true }}
                    custom={1} variants={animation}
                    className={s.skillsHeader}>
                    <Title title={'My soft skills'} />
                </motion.div>
                <motion.ul initial="hidden"
                           whileInView="visible"
                           viewport={{ amount: 0.5, once: true }}
                           className={s.softSkills}>
                    <motion.li custom={1} variants={animationSkills2}>Hardworking</motion.li>
                    <motion.li custom={2} variants={animationSkills2}>Willingness to learn</motion.li>
                    <motion.li custom={3} variants={animationSkills2}>Team work</motion.li>
                    <motion.li custom={4} variants={animationSkills2}>Punctual</motion.li>
                    <motion.li custom={5} variants={animationSkills2}>Diligent</motion.li>
                </motion.ul>
            </div>
        </div>
    );
};

export default AllSkills;