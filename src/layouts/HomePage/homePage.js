import React from 'react'
import Bringing from '../../components/Bringing/Bringing'
import styles from './Style.module.css'
import speakerAktif from '../../../src/assets/shared/desktop/image-zx9-speaker.jpg'

const homePage = () => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.speakerLayout}>
                    <img src={speakerAktif}/>
                </div>

                <div className={styles.descSpeaker}>
                    <h1 className={styles.descTitle}>ZX9 SPEAKER</h1>
                    <p className={styles.descP}> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className={styles.descButton}>SEE PRODUCT</button>
                </div>
            </div>
            <Bringing/>
        </div>
          
    )
}

export default homePage
