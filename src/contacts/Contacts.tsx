import React from 'react';
import { motion } from 'framer-motion';
import s from './Contacts.module.scss'
import SC from '../common/styles/Container.module.scss';
import Title from '../common/components/Title';


const Contacts = () => {
    const animation = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <div className={s.contactsBlock} id="contacts">
            <div className={SC.container}>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            custom={1} variants={animation}
                            className={s.myContacts}>
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
                </motion.div>
            </div>
        </div>
    );
};

export default Contacts;