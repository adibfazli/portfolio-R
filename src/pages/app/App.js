import React from 'react';
import MyCar from '../../componants/MyCar/MyCar';
import Cloud from '../../componants/Cloud/Cloud';
import Menu from '../../componants/Menu/Menu'

import styles from'./App.module.css';
import Cactus from '../../image/cactus.png';
import BlurCactus from '../../image/blurCac.png';
import SpeechBubble from '../../image/speechBubble.png';

import Git from '../../image/GITHUB.png'
import Linkedin from '../../image/linkedin.png'

function App() {
  return (
      <div className={styles.page_container_div}>
          <div className={styles.webLogo}>
            <h1>adibfazli.com</h1>
          </div>
          <Cloud />
          <div className={styles.mountainImg_container}></div>
          <img src={Cactus} className={styles.cactusImage}/>
          <img src={BlurCactus} className={styles.blurCactusImage}/>
          <Menu />
          <MyCar />
          <div className={styles.footerDiv}>
            <p>© Adib Fazli. All rights reserved.</p>
            <img src={Git} className={styles.icons}></img>
            <img src={Linkedin} className={styles.icons}></img>
          </div>
      </ div>
  );
}

export default App;
