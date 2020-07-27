import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import SpeechBubble from '../../image/speechBubble.png';
import Minesweeper from '../../image/minesweeper.jpg';
import YouPick from '../../image/youpick.jpg';
import Junkie from '../../image/junkie.jpg';
import ZartMessage from '../../image/zart.jpg';
import BrowBrow from '../../image/browbrow.jpg';
import Coming from '../../image/comingsoon.jpg';
import MERN from '../../image/MERN.png';
import MEN from '../../image/MEN.png';
import Python from '../../image/python.png';
import JsHtml from '../../image/jsHtmlCss.png';
import MERN2 from '../../image/MERN2.png';
import MERN2s3 from '../../image/MERN2s3.png';
import MEN2 from '../../image/MEN2.png';
import Python2 from '../../image/python2.png';
import JsHtml2 from '../../image/JsHtml.png';
import Boot2 from '../../image/boot.png';


const Menu = props =>{

    const [activeCategory , setActiveCategory] = useState(null);

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
                    <p className={styles.speechBubble_Hi_p}>Hey there, no time to stop but I'm sure we can have a good chat.</p>
                </div>
                <div className={styles.navBar_div} id="navBar">
                    <p 
                        className={ activeCategory == "about" ? styles.navActiveCategory : styles.navDeactiveCategory}
                        onClick={()=>{ setActiveCategory('about') }}
                    >About</p>
                    <span>|</span>
                    <p
                        className={ activeCategory == "projects" ? styles.navActiveCategory : styles.navDeactiveCategory}
                        onClick={()=>{ setActiveCategory('projects') }}
                    >Projects</p>
                    <span>|</span>
                    <p
                        className={ activeCategory == "contact" ? styles.navActiveCategory : styles.navDeactiveCategory}
                        onClick={()=>{ setActiveCategory('contact') }}
                    >contact</p>
                    <span>|</span>
                    <p
                        className={ activeCategory == "resume" ? styles.navActiveCategory : styles.navDeactiveCategory}
                        onClick={()=>{ setActiveCategory('resume') }}
                    >Rresume</p>
                </div>
                <div className={styles.webContent}>
                    <div className={styles.aboutContent} style={{display: activeCategory == "about" ? "flex" : "none"}}>
                        <p><span>"</span> I am a full-stack developer with computer science background. Big fan of Off-roading and adventure who is motivated and self-starter with a persistent drive to succeed. I was a chemical engineer major until I found the love of my life (Programing world) when I took a computer programing class by mistake, and ever since then EAT CODE SLEEP REPEAT. <span>"</span></p>
                    </div>

                    <div className={styles.projectContent_mainDiv} style={{display: activeCategory == "projects" ? "grid" : "none"}}>
                        {/* Minesweeper */}
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg} src={Minesweeper} alt=""/>
                            <p>Minesweeper</p>
                            <img className={styles.stackName2} src={JsHtml2} alt=""/>
                        </div>
                        {/* YouPick */}
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg}  src={YouPick} alt=""/>
                            <p>YouPick</p>
                            <img className={styles.stackName2} src={MEN2} alt=""/>
                        </div>
                        {/* Junkie */}
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg}  src={Junkie} alt=""/>
                            <p>Junkie</p>
                            <img className={styles.stackName2} src={Python2} alt=""/>
                        </div>
                        {/* ZartMessage */}
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg}  src={ZartMessage} alt=""/>
                            <p>ZartMessage</p>
                            <img className={styles.stackName2} src={MERN2} alt=""/>
                        </div>
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg}  src={BrowBrow} alt=""/>
                            <p>BrowBrow</p>
                            <img className={styles.stackName2} src={Boot2} alt=""/>
                        </div>
                        <div className={styles.projectContent}>
                            <img className={styles.projectImg}  src={Coming} alt=""/>
                            <p>Coming Soon</p>
                            <img className={styles.stackName2} src={MERN2s3} alt=""/>
                        </div>
                    </div>
                    <div className={styles.aboutContent} style={{display: activeCategory == "contact" ? "flex" : "none"}}>
                        <p><span>"</span> I am a full-stack developer with computer science background. Big fan of Off-roading and adventure who is motivated and self-starter with a persistent drive to succeed. I was a chemical engineer major until I found the love of my life (Programing world) when I took a computer programing class by mistake, and ever since then EAT CODE SLEEP REPEAT. <span>"</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;