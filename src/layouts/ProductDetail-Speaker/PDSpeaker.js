import React from 'react';
import xx99M2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import styles from './PDSpeaker.css'

import Counterer from "./Counterer";
import CounterContext from "./Counter";

const PdSpeaker = () => {
  return (
    <div>
      <p>Go Back</p>
      <div className={styles.PDAtas}>
        <img src={xx99M2} />
        <div className={styles.kanan}>
          <h5>NEW PRODUCT</h5>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
            system that offers truly wireless connectivity -- creating new possibilities for more
            pleasing and practical audio setups.</p>
          <h4>$4500</h4>
          <div className="increDecreWBtn">
            <div className="increDecre">
              <CounterContext.Provider
                value={{ count, increment, decrement }}
              >
                <Counterer />
              </CounterContext.Provider>
            </div>
            <button className={"desdet-btn"} onClick={checkout}>
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdSpeaker;