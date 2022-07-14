import React from 'react';
import { motion } from 'framer-motion';
import SC from '../common/styles/Container.module.scss';
import s from './AllProjects.module.scss'
import Project from './project/Project';
import Title from '../common/components/Title';
import flex from '../common/img/flex.jpg';
import grid from '../common/img/grid.jpg';
import smok from '../common/img/smok.jpg';
import pizza from '../common/img/pizza.jpg';
import todo from '../common/img/todo.jpg';

const AllProjects = () => {
    const todoDecr = 'Development TodoList with CRUD operations (React, Redux, TypeScript)'
    const pizDecr = 'SPA for online shopping Pizza (React, Redux, TypeScript)'
    const smokDecr = 'Web application (SPA) that helps the user quit smoking (OOP, MVC, AJAX, rest API, localStorage, Database)'
    const flexDecr = 'Web site based on layouts, using HTML, CSS and JavaScript (based on Flex technologies)'
    const gridDecr = 'Web site based on layouts, using HTML, CSS and JavaScript (based on Grid technologies)'

    const flexImage = { backgroundImage: `url(${flex})` };
    const gridImage = { backgroundImage: `url(${grid})` };
    const smokImage = { backgroundImage: `url(${smok})` };
    const pizzaImage = { backgroundImage: `url(${pizza})` };
    const todoImage = { backgroundImage: `url(${todo})` };

    const gridDemo = 'https://nedug.github.io/HTML_CSS/FD1-155-21/Makets_flex/grid.html';
    const gridCode = 'https://github.com/nedug/HTML_CSS/tree/master/FD1-155-21/Makets_flex';
    const flexDemo = 'https://nedug.github.io/HTML_CSS/FD1-155-21/Makets_flex/index.html';
    const flexCode = 'https://github.com/nedug/HTML_CSS/tree/master/FD1-155-21/Makets_flex';
    const smokDemo = 'https://nedug.github.io/JavaScript/FD2-98-21/project/spa_smoking/index.html';
    const smokCode = 'https://github.com/nedug/JavaScript/tree/master/FD2-98-21/project/spa_smoking';
    const pizzaDemo = 'https://nedug.github.io/Pizza-App-React/';
    const pizzaCode = 'https://github.com/nedug/Pizza-App-React';
    const todoDemo = 'https://nedug.github.io/IT-incubator';
    const todoCode = 'https://github.com/nedug/IT-incubator';

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

    return (
        <div className={s.allProjectsBlock} id="projects">
            <div className={`${SC.container} ${s.allProjectsContainer}`}>

                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1, once: true }}
                            custom={1} variants={animation}
                            className={s.projectTitle}>
                    <Title title={'My projects'} />
                </motion.div>
                <div className={s.linksToProjects}>
                    <Project style={todoImage} title={'Todolist'} description={todoDecr} demo={todoDemo}
                             code={todoCode} />
                    <Project style={pizzaImage} title={'Online Pizza'} description={pizDecr} demo={pizzaDemo}
                             code={pizzaCode} />
                    <Project style={smokImage} title={'No Smoking'} description={smokDecr} demo={smokDemo}
                             code={smokCode} />
                    <Project style={flexImage} title={'Creatives agency'} description={flexDecr} demo={flexDemo}
                             code={flexCode} />
                    <Project style={gridImage} title={'Shopping'} description={gridDecr} demo={gridDemo}
                             code={gridCode} />
                </div>

            </div>
        </div>
    );
};

export default AllProjects;