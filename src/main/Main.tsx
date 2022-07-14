import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import s from './Main.module.scss';
import SC from '../common/styles/Container.module.scss';
// @ts-ignore (no type declarations for vantajs)
import VANTA from 'vanta/dist/vanta.net.min';
import OverlayScrollbars from 'overlayscrollbars';


const Main = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                VANTA({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x9fa4a4,
                    backgroundColor: 0xe6e6e6,
                    points: 5.00,
                    maxDistance: 16.00,
                    spacing: 20.00
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const animation = {
        hidden: {
            // x: -100,
            opacity: 0,
        },
        visible: {
            // x: 0,
            opacity: 1,
            transition: { delay: 0.4 }
        },
    };

    const clickScroll = () => {

        const osInstance = OverlayScrollbars(document.body)!;
        osInstance.scroll({ y : window.innerHeight }, );

        // document.documentElement.scrollTop = window.innerHeight;
        // window.scrollBy(0, window.innerHeight);
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={s.mainDiv} ref={vantaRef} id="main">
            <div className={SC.container}>
                <div className={s.description}>
                    <p style={{marginBottom: 45}}>Hello everyone!</p>
                    <p>My name is <b>Alexander Rusin</b>.</p>
                    <p>I'm front-end developer based in Minsk, Belarus.</p>
                    <p onClick={clickScroll} className={s.scrollText}>-- scroll down to check out my skills and projects --</p>
                    <motion.button variants={animation} className={s.CVBtn}>
                        <a href="https://drive.google.com/file/d/1mD977Y3Er8u_9zgPc350KDWF6A1grWAA/view?usp=sharing" target="_blank" >
                            Download CV
                        </a>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Main;