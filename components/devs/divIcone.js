import Link from 'next/link';
import React from 'react';
import Seta from '../../components/svg/seta.js';
import Styles from '../../styles/landingPage.divIcones.module.css';

export default function DivIcone({Svg, titulo, desc, url}) {
    return (
        <div className={Styles.divIcone}>
            <div>
                {Svg && (Svg)}
                
                <span className={Styles.titulo}>{titulo}</span>
                <span className={Styles.desc}>{desc}</span>
                <Link href={url}><a className={Styles.link}>Saiba mais <Seta width={'1rem'} /></a></Link>
            </div>
        </div>
    )
}

