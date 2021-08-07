import React from 'react'
import styles from './Style.module.css'
import orangGanteng from '../../assets/shared/desktop/image-best-gear.jpg'

const Bringing = () => {
    return (
        <div className={styles.BringingText} >
            <div className={styles.BringingDesc}>
                <h1>BRINGING YOU THE <span className={styles.spanText}>BEST</span> AUDIO GEAR</h1>
            </div>
                <div className={styles.DescP}>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
  rooms available for you to browse and experience a wide range of our products. Stop by our store
  to meet some of the fantastic people who make Audiophile the best place to buy your portable
  audio equipment.</p>
               </div>
            <img src={orangGanteng} className={styles.orangCakep}/>
        </div>
        

    )
}

export default Bringing
