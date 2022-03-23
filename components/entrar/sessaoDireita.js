import React from 'react';
import Video1 from '../../static/pages/entrar/video1.mp4';
import Styles from '../../styles/entrar.module.css';

export default function SessaoDireita() {
    return (
        <section className={Styles.divDireita}>
            <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                <source src={Video1} type='video/mp4' />
            </video>
        </section>
    )
}
