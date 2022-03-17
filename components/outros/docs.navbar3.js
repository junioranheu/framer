import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/docs.navbar3.module.css';

export default function Navbar1() {
    const itens = [
        { item: 'Overview', url: '/developers' },
        { item: 'Motion', url: '/motion' },
        { item: 'Handshake', url: '/developers/handshake' },
        { item: 'Guides', url: '/docs/guides' },
        { item: 'API Documentation', url: '/docs' }
    ]

    const { asPath } = useRouter();
    const [urlAtual, setUrlAtual] = useState('');
    useEffect(() => {
        // console.log(asPath);
        setUrlAtual(asPath);
    }, [asPath]);

    // console.log(itens);

    return (
        <nav className={Styles.navbar}>
            {itens.map((item, i) => (
                <Link key={i} href={item.url}>
                    <a className={`${(urlAtual === item.url ? 'opacidade' : '')}`}>{item.item}</a>
                </Link>
            ))}
        </nav>
    )
}
