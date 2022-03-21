import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Seta from '../../components/svg/seta.js';
import ImagemSessao3 from '../../static/pages/devs/ImagemSessao3.webp';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao4() {
    return (
        <section className={`${Styles.principal} ${Styles.corSecundaria}`}>
            <span className={`${Styles.efeitoTextoCorPrincipal} ${Styles.margemTitulo}`}>Recurso em desenvolvimento</span>

            <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopP}`}>
                <span className={Styles.tituloPrincipalMedio}>Crie seu código</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal} style={{opacity: '0.7'}}>Lançamos um novo fantástico recurso,</span>
            </div>

            <div className={Styles.margemTopP}>
                <Link href='/docs'><a className={Styles.link}>Saiba mais <Seta width={'1.9rem'} /></a></Link>
            </div>

            <div className={`${Styles.divMedia} ${Styles.margemTopG}`}>
                    <Image src={ImagemSessao3} alt='' className={Styles.imagem} />
                </div>
        </section>
    )
}


