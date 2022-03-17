import Link from 'next/link';
import Styles from '../../styles/docs.navbar3.module.css';

export default function Navbar1() {
    return (
        <nav className={Styles.navbar}>
            <Link href='/'><a>Overview</a></Link>
            <Link href='/'><a>Motion</a></Link>
            <Link href='/'><a>Handshake</a></Link>
            <Link href='/'><a>Guides</a></Link>
            <Link href='/'><a>API Documentation</a></Link>
        </nav>
    )
}
