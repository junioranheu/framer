import Link from 'next/link';
import Styles from '../../styles/sidebar.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'

export default function Sidebar({ itens, justify }) {
    const { asPath } = useRouter();
    // console.log('asPath: ' + asPath);

    return (
        <section className={Styles.principal} style={{ justifyContent: justify }}>
            <div className={Styles.wrapper}>
                {itens.map((item, i) => (
                    <div className={Styles.divItem} key={i} >
                        <span className={Styles.item} key={i}>{item.item}</span>

                        {item.subItens.map((subItem, i2) => (
                            subItem.url && (
                                <Link key={i2} href={subItem.url}>
                                    <a className={`${Styles.subItem} ${(asPath === subItem.url ? 'cor-principal' : '')}`}>
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
