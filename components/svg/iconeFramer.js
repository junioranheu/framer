import Styles from '../../styles/devs.divIcones.module.css';

export default function IconeFramer() {
    return (
        <div className={Styles.icone}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
                <path d='M10 30V10l10 10 10-10v20l-5-5-5 5-5-5z' fill='var(--branco)'></path>
            </svg>
        </div>
    )
}