import Styles from '../../styles/doc.module.css'
import StylesGeral from '../../styles/geral.module.css'

export default function Index() {
    return (
        <section className={Styles.wrapper}>
            <div className={Styles.principal}>
                <span className={StylesGeral.titulo}>Index</span>
            </div>
        </section>
    )
}
