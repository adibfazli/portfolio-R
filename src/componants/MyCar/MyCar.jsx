import React from 'react';
import styles from './MyCar.module.css';
import myCar from '../../image/me.gif'
import tumbleweed from '../../image/tumbleweed.png';
import SpeechBubble from '../../image/speechBubble.png';
import Cactus from '../../image/cactus.png';

const MyCar = props =>{
    
    return (
        <div className={styles.myCarImg_div}>
            <div className={styles.carImage_div}>
                <img src={myCar} className={styles.carImage}/>
                <img src={SpeechBubble} className={styles.speechBubble_img}/>
                <p className={styles.speechBubble_Hi_p}>Hey there, no time to stop but I'm sure we can have good chat</p>
            </div>
            <div className={styles.tumbleweedImage_div_container}>
                <div className={styles.tumbleweedImage_div}>
                    <img src={tumbleweed} className={styles.tumbleweedImage}/>
                </div>
            </div>
        </div>
    )
}

export default MyCar;