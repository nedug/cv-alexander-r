import React from 'react';
import s from './HireMe.module.scss'
import SC from '../common/styles/Container.module.scss'

const HireMe = () => {
    return (
        <div className={s.HireMeBlock} id = 'aboutMe'>
            <div className={`${SC.container} ${s.container}`}>
                <h2>Considering remote work options.</h2>
                <div>
                    {/*<a href='#'>Download resume </a>*/}
                    {/*<a href='#'>Hire me</a>*/}

                </div>

            </div>

        </div>
    );
};

export default HireMe;