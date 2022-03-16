import Styles from '../../styles/sidebar.module.css'

export default function SidebarDireita() {
    return (
        <section className={`${Styles.principal} ${Styles.direita}`}>
            <div className={Styles.wrapper}>
                <div>
                    <span>On this page</span>
                </div>

                <div>
                    <span>Overview</span>
                    <span>Animations</span>
                    <span>Gestures</span>
                    <span>Variants</span>
                    <span>Server-side rendering</span>
                    <span>MotionValues</span>
                    <span>Scroll-based animations</span>
                </div>

                <div>
                    <span>Quick Start</span>
                    <span>Installation</span>
                    <span>Importing</span>
                </div>

                <div>
                    <span>Topics</span>
                    <span>Motion components</span>
                    <span>Animation</span>
                    <span>Gestures</span>
                    <span>MotionValue</span>
                </div>
            </div>
        </section>
    )
}
