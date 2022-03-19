function itens() {
    const itens = [
        {
            titulo: 'Animação',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion } from "framer-motion"

export const MyComponent = () => (
    <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
    />
)`,
            iframe: 'https://codesandbox.io/embed/framer-motion-simple-animation-fz7cz?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        {
            titulo: 'Keyframes',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion } from "framer-motion"

export const MyComponent = () => (
    <motion.div
    animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    />
)`,
            iframe: 'https://codesandbox.io/embed/framer-motion-keyframes-ekks8?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        {
            titulo: 'Variantes',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
    >
        <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
        <Items />
    </motion.nav>
    )
}`,
            iframe: ''
        },
        {
            titulo: 'Animações',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion } from "framer-motion"

export const MyComponent = () => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    />
)`,
            iframe: 'https://codesandbox.io/embed/framer-motion-gesture-animations-8c5y3?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        {
            titulo: 'Arrastar',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion } from "framer-motion"

export const MyComponent = () => (
    <motion.div
        drag
        dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
        }}
    />
)`,
            iframe: 'https://codesandbox.io/embed/framer-motion-drag-with-constraints-pjn6t?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        {
            titulo: 'MotionValues',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion, useMotionValue, useTransform } from "framer-motion"

export const MyComponent = () => {
    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

    return (
        <motion.div style={{ background }}>
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
        >
            <Icon x={x} />
        </motion.div>
        </motion.div>
    )
}`,
            iframe: 'https://codesandbox.io/embed/framer-motion-path-drawing-drag-and-usetransform-jnqk2?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        {
            titulo: 'Animações acionadas por rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
/>`,
            iframe: 'https://codesandbox.io/embed/framer-motion-5-3-scroll-triggered-animations-2hbg5?fontsize=14&hidenavigation=1&theme=dark&view=preview&codemirror=1&hidedevtools=1'
        },
        {
            titulo: 'Animações com links de rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion, useViewportScroll } from "framer-motion"

export const CircleIndicator = () => {
    const { scrollYProgress } = useViewportScroll()

    return (
    <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
    />
    )
}`,
            iframe: 'https://codesandbox.io/embed/framer-motion-viewport-scroll-and-svg-path-animation-mwi35?view=preview&codemirror=1&hidedevtools=1&hidenavigation=1&theme=dark'
        },
        // {
        //     titulo: 'Animações de saída',
        //     texto: '',
        //     isTopico: true,
        //     url: '',
        //     codigo: `<motion.div animate={{ x: 100 }} />`,
        //     iframe: ''
        // },
        // {
        //     titulo: 'Layout',
        //     texto: '',
        //     isTopico: true,
        //     url: '',
        //     codigo: `<motion.div animate={{ x: 100 }} />`,
        //     iframe: ''
        // },
        // {
        //     titulo: 'Layout compartilhado',
        //     texto: '',
        //     isTopico: true,
        //     url: '',
        //     codigo: `<motion.div animate={{ x: 100 }} />`,
        //     iframe: ''
        // },
        // {
        //     titulo: 'Linha de contorno',
        //     texto: '',
        //     isTopico: true,
        //     url: '',
        //     codigo: `<motion.div animate={{ x: 100 }} />`,
        //     iframe: ''
        // },
        // {
        //     titulo: 'Caminho',
        //     texto: '',
        //     isTopico: true,
        //     url: '',
        //     codigo: `<motion.div animate={{ x: 100 }} />`,
        //     iframe: ''
        // },
        {
            titulo: 'Outros',
            texto: ' ',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Padrões de UI',
            texto: '',
            isTopico: false,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Técnicas',
            texto: '',
            isTopico: false,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Biblioteca de terceiros',
            texto: '',
            isTopico: false,
            url: '',
            codigo: ``,
        }
    ]

    // Criar ID para os itens;
    const nome = 'docs_exemplos_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;