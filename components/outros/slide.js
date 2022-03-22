import React, { Fragment } from 'react';
import Styles from '../../styles/carousel.module.css';

export default function Slide({ video, descricao }) {
    return (
        <Fragment>
            <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                <source src={video} type='video/mp4' />
            </video>

            <div className={Styles.divDescricao}>
                <span className={Styles.descricao}>{descricao}</span>
            </div>
        </Fragment>
    )
}