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
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Animações',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Arrastar',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'MotionValues',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Animações acionadas por rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Animações com links de rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Animações de saída',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Layout',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Layout compartilhado',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Linha de contorno',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Caminho',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Mais',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Padrões de UI',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Técnicas',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Biblioteca de terceiros',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
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