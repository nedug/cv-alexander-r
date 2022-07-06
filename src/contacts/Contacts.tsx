import React from 'react';
import s from './Contacts.module.scss'
import SC from '../common/styles/Container.module.scss';
import Title from '../common/components/Title';


const Contacts = () => {

    return (
        <div className={s.contactsBlock} id="contacts">
            <div className={SC.container}>
                <div className={s.myContacts}>
                    <Title title={'My contacts'} />
                    <p>
                        <a href="mailto:ru55nedug@gmail.com" target="_blank">ru55nedug@gmail.com</a>
                    </p>
                    <p>
                        <a href="tel:+375336665502" target="_blank">+375 33 6665502</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/alexander-rusin-789760226" target="_blank">Linkedin</a>
                    </p>
                    <p>
                        <a href="https://github.com/nedug" target="_blank">Github</a>
                    </p>
                    <p>
                        <a href="https://t.me/polkaj" target="_blank">Telegram</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;