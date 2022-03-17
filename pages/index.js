import Link from 'next/link';

export default function Index() {
    return (
        <section>
            Esse é o Index principal<br/>
            <Link href='/docs'><a style={{color: 'var(--cor-principal)'}}>Clique aqui para ir até /docs</a></Link>
        </section>
    )
}
