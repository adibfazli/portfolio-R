import React from 'react';
import MyCar from '../../componants/MyCar/MyCar';
import Cloud from '../../componants/Cloud/Cloud';
import Menu from '../../componants/Menu/Menu'

import styles from'./App.module.css';
import Cactus from '../../image/cactus.png';
import BlurCactus from '../../image/blurCac.png';
import SpeechBubble from '../../image/speechBubble.png';

function App() {
  return (
      <div className={styles.page_container_div}>
          <Cloud />
          <div className={styles.mountainImg_container}></div>
          <img src={Cactus} className={styles.cactusImage}/>
          <img src={BlurCactus} className={styles.blurCactusImage}/>
          <Menu />
          <MyCar />
      </ div>
  );
}

export default App;
