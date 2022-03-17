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
                    <Link href='/'><a>Teams</a></Link>
                    <Link href='/'><a>Showcase</a></Link>
                    <Link href='/'><a>Developers</a></Link>
                    <Link href='/'><a>Resources</a></Link>
                    <Link href='/'><a>Blog</a></Link>
                    <Link href='/'><a>Pricing</a></Link>
                    <Link href='/'><a><Lupa /></a></Link>
                </div>

                <div>
                    <Link href='/'><a>Sign in</a></Link>

                    <span className={Styles.margemBotao}>
                        <Botao texto={'Sign up for free'} url={'/'} isNovaAba={false} />
                    </span>
                </div>
            </div>
        </nav>
    )
}