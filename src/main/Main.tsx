import React , {useEffect , useRef , useState} from 'react';
import s from './Main.module.scss'
import SC from '../common/styles/Container.module.scss'
// @ts-ignore (no type declarations for vantajs)
 import VANTA from 'vanta/dist/vanta.net.min'



const Main = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const vantaRef = useRef(null);
    useEffect(()=>{
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
                    color: 0xff0505,
                    backgroundColor: 0xffffff,
                    showDots: false
                })
            )}
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    },[vantaEffect])
    return (
        <div className={s.mainDiv} ref = {vantaRef} id ='main'  >
            <div className={SC.container} >
                <div className={s.description}  >
                    <p>Hello!</p>
                    <p>My name is Ekaterina Kopylova.</p>
                    <p>I am front-end developer, based in Dubai, UAE.</p>
                    <p>Scroll down to check on my skills and projects.</p>
                    <button className={s.CVBtn}>
                        <a href="https://drive.google.com/file/d/129gGP05LKCd6RQ1KPJW7-zVumAU-TlHV/view?usp=sharing">Download CV</a>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Main;