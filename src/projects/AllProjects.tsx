import React from 'react';
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
    const todoDecr = 'Development TodoList with CRUD operations (React, Redux, TypeScript).'
    const pizDecr = 'SPA for online shopping Pizza (React, Redux, TypeScript).'
    const smokDecr = 'Web application (SPA) that helps the user quit smoking (OOP, MVC, AJAX, rest API, localStorage, Database).'
    const flexDecr = 'Web site based on layouts, using HTML, CSS and JavaScript (based on Flex technologies)'
    const gridDecr = 'Web site based on layouts, using HTML, CSS and JavaScript (based on Grid technologies).'


    const flexImage = {
        backgroundImage: `url(${flex})`
    };
    const gridImage = {
        backgroundImage: `url(${grid})`
    };
    const smokImage = {
        backgroundImage: `url(${smok})`
    };
    const pizzaImage = {
        backgroundImage: `url(${pizza})`
    };
    const todoImage = {
        backgroundImage: `url(${todo})`
    };

    return (
        <div className={s.allProjectsBlock} id="projects">
            <div className={`${SC.container} ${s.allProjectsContainer}`}>

                <div className={s.projectTitle}>
                    <Title title={'My projects'} />
                </div>
                <div className={s.linksToProjects}>
                    <Project style={todoImage} title={'Todolist'} description={todoDecr} />
                    <Project style={pizzaImage} title={'Online Pizza'} description={pizDecr} />
                    <Project style={smokImage} title={'No Smoking'} description={smokDecr} />
                    <Project style={flexImage} title={'Creatives agency'} description={flexDecr} />
                    <Project style={gridImage} title={'Shopping'} description={gridDecr} />
                </div>

            </div>
        </div>
    );
};

export default AllProjects;