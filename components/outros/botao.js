import Styles from '../../styles/geral.module.css';

export default function Botao({ texto, url }) {
    return (
        <button className={Styles.botao} onClick={() => { window.open(url, '_blank') }}>{texto}</button>
    )
}
