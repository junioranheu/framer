import Styles from '../../styles/sidebar.module.css'

export default function Sidebar() {
    return (
        <section className={Styles.principal}>
            <div className={Styles.wrapper}>
                <div>
                    <span>Getting started</span>
                    <span>Introduction</span>
                    <span>Examples</span>
                </div>

                <div>
                    <span>API</span>
                    <span>Animation</span>
                    <span>Transition</span>
                    <span>Gestures</span>
                    <span>MotionValue</span>
                    <span>Utilities</span>
                </div>

                <div>
                    <span>Components</span>
                    <span>Motion</span>
                    <span>AnimatePresence</span>
                    <span>LayoutGroup</span>
                    <span>LazyMotion</span>
                    <span>MotionConfig</span>
                    <span>Reorder</span>
                </div>

                <div>
                    <span>3D</span>
                    <span>Introduction</span>
                    <span>LayoutCamera</span>
                    {/* <span>LayoutOrthographicCamera</span> */}
                    <span>MotionCanvas</span>
                </div>

                <div>
                    <span>Motion resources</span>
                    <span>Accessibility</span>
                    <span>Reduce bundle size</span>
                    <span>Upgrade guides</span>
                </div>

                <div>
                    <span>Code in Framer</span>
                    <span>Utilities</span>
                    <span>RenderTarget</span>
                    <span>Property Controls</span>
                </div>

                <div>
                    <span>Community</span>
                    <span>GitHub</span>
                    <span>Discord</span>
                </div>
            </div>
        </section>
    )
}
