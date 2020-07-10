import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import SpeechBubble from '../../image/speechBubble.png';


const Menu = props =>{

    {setTimeout(function () {
        document.getElementById("hi").style.opacity = "0" 
        {setTimeout(function () {
            document.getElementById("hi").style.display = "none" 
            document.getElementById("navBar").style.opacity = "1" 
        }, 500)}
      }, 5000)}
    
    return (
        <div className={styles.speech_container_div}>
            <div className={styles.speech_div}>
                <div className={styles.hi_div} id="hi">
                    <p className={styles.speechBubble_Hi_p}>Hey there, no time to stop but I'm sure we can have a good chat</p>
                </div>
                <div className={styles.navBar_div} id="navBar">
                    <p>About</p>
                    <span>|</span>
                    <p>Projects</p>
                    <span>|</span>
                    <p>contact</p>
                    <span>|</span>
                    <p>Rresume</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;