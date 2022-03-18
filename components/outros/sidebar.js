import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/sidebar.module.css';

export default function Sidebar({ itens, justify }) {
    const { asPath } = useRouter();
    const [urlAtual, setUrlAtual] = useState('');

    useEffect(() => {
        // console.log(asPath);
        setUrlAtual(asPath);
    }, [asPath]);

    // console.log(itens);
  
    return (
        <section className={Styles.principal} style={{ justifyContent: justify }}>
            <div className={Styles.wrapper}>
                {itens.map((item, i) => (
                    <div className={Styles.divItem} key={i} >
                        <span className={`${Styles.item} ${i > 0 ? Styles.itemMargemTop : ''}`} key={i}>
                            <div dangerouslySetInnerHTML={{ __html: item.item }} />
                        </span>

                        {item.subItens.map((subItem, i2) => (
                            subItem.url && (
                                <Link key={i2} href={subItem.url}>
                                    <a className={`opacidade-hover ${Styles.subItem} ${(urlAtual === subItem.url ? 'cor-principal' : '')} ${(item.isPadding ? Styles.itemPadding : '')}`}>
                                        {subItem.item}
                                    </a>
                                </Link>
                            )
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
