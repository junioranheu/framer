import Link from 'next/link';
import Styles from '../../styles/docs.navbar3.module.css';

export default function Navbar1() {
    const itens = [
        {
            item: 'On this page', subItens: []
        },

        {
            item: 'Overview', subItens: [
                { item: 'Animations', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'Variants', url: '/docs/xxx' },
                { item: 'Server-side rendering', url: '/docs/xxx' },
                { item: 'MotionValues', url: '/docs/xxx' },
                { item: 'Scroll-based animations', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Quick Start', subItens: [
                { item: 'Installation', url: '/docs/xxx' },
                { item: 'Importing', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Topics', subItens: [
                { item: 'Animation', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'MotionValue', url: '/docs/xxx' }
            ]
        }
    ]

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
