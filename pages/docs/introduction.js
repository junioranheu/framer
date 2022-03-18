import React, { Fragment } from 'react';
import BlocoTexto from '../../components/outros/blocoTexto.js';
import Sidebar from '../../components/outros/sidebar';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import ItensSidebarDireita from '../../utils/sidebar/doc.itensSidebarDireita';

export default function Introduction() {
    return (
        <Fragment>
            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Introdução</span>
                        <span className={StylesGeral.tituloDesc}>Comece por aqui, explorando exemplos interativos e de fácil entendimento.</span>
                    </div>

                    {/* Visão Geral */}
                    <BlocoTexto titulo='Visão geral' texto='' codigo='' />

                    {/* Animações */}
                    <BlocoTexto titulo='Animações' texto=''
                        codigo={`<motion.div animate={{ x: 100 }} />`}
                    />

                    {/* Gestos */}
                    <BlocoTexto titulo='Gestos' texto=''
                        codigo={`<motion.div drag="x" dragConstraints={{ left: -100, right: 100 }} />`}
                    />

                    {/* Variantes */}
                    <BlocoTexto titulo='Variantes' texto=''
                        codigo={`const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }
                        
return (
    <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
    </motion.ul>
)`}
                    />
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
