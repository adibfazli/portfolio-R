import React from 'react';
import MyCar from '../../componants/MyCar/MyCar'
import Cloud from '../../componants/Cloud/Cloud'
import styles from'./App.module.css';
import Cactus from '../../image/cactus.png';
import BlurCactus from '../../image/blurCac.png';

function App() {
  return (
      <div className={styles.page_container_div}>
          <Cloud />
          <img src={Cactus} className={styles.cactusImage}/>
          <img src={BlurCactus} className={styles.blurCactusImage}/>
          <MyCar />
      </ div>
  );
}

export default App;
