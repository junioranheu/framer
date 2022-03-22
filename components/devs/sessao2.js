import React from 'react';
import IconeChain from '../../components/svg/iconeChain.js';
import StylesDivIcones from '../../styles/devs.divIcones.module.css';
import Styles from '../../styles/devs.module.css';
import IconeDom from '../svg/iconeDom.js';
import IconeFramer from '../svg/iconeFramer.js';
import IconeImport from '../svg/iconeImport.js';
import IconeNpm from '../svg/iconeNpm.js';
import IconeReact from '../svg/iconeReact.js';
import DivIcone from './divIcone';
 
export default function Sessao2() {
    return (
        <section className={`${Styles.principal} ${Styles.corSecundaria}`}>
            <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTitulo}`}>
                <span className={Styles.tituloPrincipalMedio}>O poder do browser</span>
                <span className={Styles.tituloPrincipalMedio}>com a liberdade do canvas</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal}>Juntando o canvas com código, você se expressa facilmente.</span>
                <span className={Styles.descricaoTituloPrincipal}>Se é possível no browser, é possível no Framer.</span>
            </div>

            <div className={StylesDivIcones.divIcones}>
                <DivIcone Svg={<IconeReact />} titulo='Editor embutido' desc='Um editor de código útil, dentro do browser.' url='/docs' />
                <DivIcone Svg={<IconeChain />} titulo='Compartilhe' desc='Crie qualquer código e então compartilhe gerando um link.' url='/docs' />
                <DivIcone Svg={<IconeNpm />} titulo='Suporte à NPM' desc='Use o NPM para baixar os pacotes.' url='/docs' />
                <DivIcone Svg={<IconeImport />} titulo='Menu de importação' desc='Menu para importar seus componentes.' url='/docs' />
                <DivIcone Svg={<IconeDom />} titulo='DOM' desc='Acesse ao DOM para criar seus componentes' url='/docs' />
                <DivIcone Svg={<IconeFramer />} titulo='Framer Motion' desc='Crie animações usando o Framer Motion' url='/docs' />
            </div>
        </section>
    )
}

