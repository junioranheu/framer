function itens() {
    const itens = [
        {
            titulo: 'Visão geral',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Animações',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Gestos',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
/>`,
            iframe: ''
        },
        {
            titulo: 'Variantes',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

return (
    <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
    </motion.ul>
)`,
            iframe: ''
        },
        {
            titulo: 'Renderização do lado do servidor',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div initial={false} animate={{ x: 100 }} />`,
            iframe: ''
        },
        {
            titulo: 'Animações baseadas em scroll',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

return <motion.div drag="x" style={{ x, opacity }} />`,
            iframe: ''
        },
        {
            titulo: 'Início rápido',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Instalação',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `npm install framer-motion`,
            iframe: ''
        },
        {
            titulo: 'Importar',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `import { motion } from "framer-motion"`,
            iframe: ''
        },
        {
            titulo: 'Tópicos',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },
        {
            titulo: 'Animação',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `const variants = {
    hidden: { opacity: 0 iframe: '' },
    visible: { opacity: 1 iframe: '' },
}
     
return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
    />
)`,
            iframe: ''
        },
        {
            titulo: 'Gestos',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
/>`,
            iframe: ''
        }
    ]

    // Criar ID para os itens;
    const nome = 'docs_introducao_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;