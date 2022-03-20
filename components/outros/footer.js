import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/footer.module.css';
import { modoDark } from '../../utils/context/modoDarkContext';

export default function Footer() {
    useEffect(() => {
        const isModoDark = (modoDark.get() ? modoDark.get().isModoDark : null);
        // console.log(isModoDark);

        if (isModoDark === null) {
            // console.log('isModoDark não definido');
            return false
        }

        if (isModoDark) {
            // Modo dark;
            setIsDark(true);
            document.documentElement.style.setProperty('--preto', '#1A1A1A');
            document.documentElement.style.setProperty('--super-preto', '#000000');
            document.documentElement.style.setProperty('--branco', '#FFFFFF');
            document.documentElement.style.setProperty('--cinza', '#313131');
        } else {
            // Modo light;
            setIsDark(false);
            document.documentElement.style.setProperty('--preto', '#FFFFFF');
            document.documentElement.style.setProperty('--super-preto', '#ebe8e8');
            document.documentElement.style.setProperty('--branco', '#1A1A1A');
            document.documentElement.style.setProperty('--cinza', '#F2F2F2');
        }
    }, []);

    const [isDark, setIsDark] = useState(true);
    function alterarModo() {
        // "Inverter" as cores para ativar o modo dark/light;
        if (isDark) {
            // Modo light;
            setIsDark(false);
            document.documentElement.style.setProperty('--preto', '#FFFFFF');
            document.documentElement.style.setProperty('--super-preto', '#ebe8e8');
            document.documentElement.style.setProperty('--branco', '#1A1A1A');
            document.documentElement.style.setProperty('--cinza', '#F2F2F2');
        } else {
            // Modo dark;
            setIsDark(true);
            document.documentElement.style.setProperty('--preto', '#1A1A1A');
            document.documentElement.style.setProperty('--super-preto', '#000000');
            document.documentElement.style.setProperty('--branco', '#FFFFFF');
            document.documentElement.style.setProperty('--cinza', '#313131');
        }

        // Atualizar no localStorage;
        modoDark.update({ isModoDark: !isDark });
    }

    return (
        <footer className={Styles.footer}>
            {/* Principal */}
            <div className={Styles.principal}>
                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Framer</span>

                    <Link href='/'><a>Time</a></Link>
                    <Link href='/'><a>Preço</a></Link>
                    <Link href='/'><a>Mostruário <span className='efeito-new'>novo</span></a></Link>
                    <Link href='/'><a>Blog</a></Link>
                    <Link href='/'><a>Desenvolvedores</a></Link>
                    <Link href='/'><a>Atualizações</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Plataformas</span>

                    <Link href='/'><a>Web</a></Link>
                    <Link href='/'><a>macOS</a></Link>
                    <Link href='/'><a>Windows</a></Link>
                    <Link href='/'><a>iOS</a></Link>
                    <Link href='/'><a>Android</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Aprenda</span>

                    <Link href='/'><a>Tutoriais</a></Link>
                    <Link href='/'><a>Exemplos</a></Link>
                    <Link href='/'><a>Templates</a></Link>
                    <Link href='/'><a>Sessões</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Sobre</span>

                    <Link href='/'><a>Comunidade</a></Link>
                    <Link href='/'><a>Empresa</a></Link>
                    <Link href='/'><a>Carreiras</a></Link>
                    <Link href='/'><a>Legal</a></Link>
                </div>

                <div className={Styles.sessao}>
                    <span className={Styles.tituloSessao}>Suporte</span>

                    <Link href='/'><a>Usando o Framer</a></Link>
                    <Link href='/'><a>Contas</a></Link>
                    <Link href='/'><a>Contato</a></Link>
                </div>
            </div>

            {/* Secundária */}
            <div className={Styles.secundaria}>
                {/* Esquerda */}
                <div>
                    <span>
                        Copyright © {new Date().getFullYear()} Framer B.V. — Desenvolvido por

                        <Link href='https://github.com/junioranheu'>
                            <a target='_blank'>
                                <span>
                                    <span className='cor-principal-hover'>&nbsp;@junioranheu</span>
                                </span>
                            </a>
                        </Link>
                    </span>
                </div>

                {/* Direita */}
                <div className={Styles.direita}>
                    <div className={Styles.icones}>
                        <span title='Alternar modo dark/light'>
                            <FontAwesomeIcon className='pointer' icon={(isDark ? faSun : faMoon)} size='lg' onClick={() => alterarModo()} />
                        </span>

                        <span title='GitHub'>
                            <FontAwesomeIcon className='pointer' icon={faGithub} size='lg' onClick={() => { window.open('https://github.com/junioranheu', '_blank') }} />
                        </span>

                        <span title='Instagram'>
                            <FontAwesomeIcon className='pointer' icon={faInstagram} size='lg' onClick={() => { window.open('https://www.instagram.com/junioranheu/', '_blank') }} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
