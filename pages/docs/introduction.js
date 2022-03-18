import { loremIpsum } from 'lorem-ipsum';
import React, { Fragment } from 'react';
import BlocoCodigo from '../../components/outros/blocoCodigo.js';
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
                    <div>
                        <span className={StylesGeral.topico}>Visão geral</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 3 })}
                        </span>
                    </div>

                    {/* Animações */}
                    <div>
                        <span className={StylesGeral.topico}>Animações</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 3 })}
                        </span>

                        <div className={StylesGeral.codigo}>
                            <BlocoCodigo code={`<motion.div animate={{ x: 100 }} />`} />
                        </div>
                    </div>

                    {/* Gestos */}
                    <div>
                        <span className={StylesGeral.topico}>Gestos</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 2 })}
                        </span>


                        <div className={StylesGeral.codigo}>
                            <BlocoCodigo code={`<motion.div
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
/>`} />
                        </div>
                    </div>

                    {/* Variantes */}
                    <div>
                        <span className={StylesGeral.topico}>Variantes</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 3 })}
                        </span>

                        <div className={StylesGeral.codigo}>
                            <BlocoCodigo code={`const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

return (
  <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
)`} />
                        </div>
                    </div>
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
