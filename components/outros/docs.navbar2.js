import Link from 'next/link';
import Lupa from '../../components/svg/lupa';
import Styles from '../../styles/docs.navbar2.module.css';
import Framer from '../svg/framer';
import Botao from './botao';

export default function Navbar2() {
    return (
        <nav className={Styles.navbar}>
            <div>
                <div>
                    <Link href='/'><a className={Styles.iconeCorInvertida}><Framer />&nbsp;&nbsp;Framer</a></Link>
                    <Link href='/docs'><a>Documentação</a></Link>
                    <Link href='/devs'><a>Desenvolvedores</a></Link>
                    <Link href='/'><a>Preço</a></Link>
                    <Link href='/'><a><Lupa /></a></Link>
                </div>

                <div>
                    <Link href='/'><a>Entrar</a></Link>

                    <span className={Styles.margemBotao}>
                        <Botao texto={'Crie sua conta'} url={'/'} isNovaAba={false} />
                    </span>
                </div>
            </div>
        </nav>
    )
}