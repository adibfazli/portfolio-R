import React from 'react';
import styles from './MyCar.module.css';
import myCar from '../../image/me.gif'
import tumbleweed from '../../image/tumbleweed.png';

import Cactus from '../../image/cactus.png';


const MyCar = props =>{
    
    return (
        <div className={styles.myCarImg_div}>
            <div className={styles.carImage_div}>
                <img src={myCar} className={styles.carImage}/>
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