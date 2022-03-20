import Styles from '../../styles/geral.module.css';

export default function Card({ Svg, titulo, subtitulo, url }) {
    return (
        <section className={Styles.card} onClick={() => { window.open(url, '_self') }}>
            {Svg && (
                <div className={Styles.cardDivSvg}>
                    {Svg}
                </div>
            )}

            <div className={Styles.cardDivTexto}>
                <span className={Styles.cardTitulo}>{titulo}</span>
                <span className={Styles.cardSubtitulo}>{subtitulo}</span>
            </div>
        </section>
    )
}
