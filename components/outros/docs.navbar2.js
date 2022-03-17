import Link from 'next/link';
import Lupa from '../../components/svg/lupa';
import Styles from '../../styles/docs.navbar2.module.css';

export default function Navbar2() {
    return (
        <nav className={Styles.navbar}>
            <Link href='/'><a>Framer</a></Link>
            <Link href='/'><a>Teams</a></Link>
            <Link href='/'><a>Showcase</a></Link>
            <Link href='/'><a>Developers</a></Link>
            <Link href='/'><a>Resources</a></Link>
            <Link href='/'><a>Blog</a></Link>
            <Link href='/'><a>Pricing</a></Link>

            <Link href='/'><a><Lupa /></a></Link>
            <Link href='/'><a>Sign in</a></Link>
            <Link href='/'><a>Sign up for free</a></Link>
        </nav>
    )
}