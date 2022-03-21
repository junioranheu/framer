import Styles from '../../styles/card.module.css';
import Botao from './botao';

export default function CardGigante({ titulo, subtitulo, url }) {
    return (
        <section className={`${Styles.card} ${Styles.cardGigante}`}>
            <div className={Styles.cardDivTextoGigante}>
                <span className={Styles.cardTituloGrande}>{titulo}</span>
                <span className={`${Styles.cardSubtituloGrande} ${Styles.margemP}`}><span dangerouslySetInnerHTML={{ __html: subtitulo }} /></span>
            </div>

            <div className={Styles.botaoCustom}>
                <Botao texto={'Entre no nosso servidor'} url={url} isNovaAba={false} />
            </div>
        </section>
    )
}
