import Link from 'next/link';

export default function Index() {
    return (
        <section style={{ color: 'var(--cor-principal)', fontSize: '2rem', fontWeight: '500' }}>
            Esse é o Index principal — ainda não foi iniciado<br />
            <Link href='/docs'><a >Clique aqui para ir até /docs</a></Link>
        </section>
    )
}
