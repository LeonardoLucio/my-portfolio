import styles from "../styles/Global.module.css";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import Home from './home'
import Work from './work'
import About from './about'


export default function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xd1ff,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.canvas} ref={vantaRef}>
    
      <div className={styles.container}>

      <div className={styles.header}>
        
        <a href="#home">HOME</a>
        <a href="#work" >WORK</a>
        <a href="#about">ABOUT</a>
        
      </div>

        <div className={styles.main}>
      
        <a id="home"><Home /></a>
        
        <a id="work"><Work /></a>

        <a id="about"><About /></a>

        
      
        </div>
      </div>
    </div>
  );
}