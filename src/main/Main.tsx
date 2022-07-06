import React, { useEffect, useRef, useState } from 'react';
import s from './Main.module.scss';
import SC from '../common/styles/Container.module.scss';
// @ts-ignore (no type declarations for vantajs)
import VANTA from 'vanta/dist/vanta.net.min';


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
    return (
        <div className={s.mainDiv} ref={vantaRef} id="main">
            <div className={SC.container}>
                <div className={s.description}>
                    <p>Hello everyone!</p>
                    <p>My name is <b>Alexander Rusin</b>.</p>
                    <p>I am front-end developer, based in Minsk, Belarus.</p>
                    <p>Scroll down to check on my skills and projects.</p>
                    <button className={s.CVBtn}>
                        <a href="https://drive.google.com/file/d/129gGP05LKCd6RQ1KPJW7-zVumAU-TlHV/view?usp=sharing" target="_blank" >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;