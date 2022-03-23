import Link from 'next/link';
import React from 'react';
import Botao from '../../components/outros/botao.js';
import Framer from '../../components/svg/framer.js';
import Styles from '../../styles/entrar.module.css';
import Google from '../svg/google.js';

export default function SessaoEsquerda() {
    return (
        <section className={Styles.divEsquerda}>
            <Framer width='1.3rem' />
            <span className={Styles.titulo}>Crie sua conta</span>
            <span className={Styles.subtitulo}>Já tem uma conta? <Link href='/entrar'><a className={'cor-principal'}>Entre aqui</a></Link></span>

            <div className={`${Styles.botaoCustom} ${Styles.margemTopXP}`}>
                <Botao texto='&nbsp;&nbsp;Criar conta com o Google' url={'/docs'} isNovaAba={false} Svg={<Google width={'25px'} />} />
            </div>

            <div>
                <div className={Styles.divisao}>ou</div>

                <div className={Styles.margemTopP}>
                    <input className={Styles.input} type='text' placeholder='Nome completo' />
                </div>

                <div className={Styles.margemTopP}>
                    <input className={Styles.input} type='email' placeholder='E-mail' />
                </div>

                <div className={Styles.margemTopP}>
                    <select className={Styles.input}>
                        <option value=''>Qual seu serviço?</option>
                        <option value='designer'>Designer</option>
                        <option value='softwaredeveloper'>Desenvolvedor de software</option>
                        <option value='productmanager'>Gestor de projetos</option>
                        <option value='marketeer'>Marketing</option>
                        <option value='other'>Outro</option>
                    </select>
                </div>

                <div className={`${Styles.checkbox} ${Styles.margemTopP}`}>
                    <input type='checkbox' />
                    <label>Concordo com os termos de uso</label>
                </div>

                <div className={`${Styles.botaoCustom} ${Styles.margemTopP}`}>
                    <Botao texto={'Criar conta'} url={'/docs'} isNovaAba={false} Svg='' />
                </div>
            </div>
        </section>
    )
}
