function itens() {
    const itens = [
        { titulo: 'Visão geral', texto: '', isTopico: true, codigo: `` },
        { titulo: 'Animações', texto: '', isTopico: false, codigo: `<motion.div animate={{ x: 100 }} />` },
        {
            titulo: 'Gestos', texto: '', isTopico: false, codigo: `<motion.div
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
/>` },
        {
            titulo: 'Variantes', texto: '', isTopico: false, codigo: `const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

return (
    <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
    </motion.ul>
)` },
        { titulo: 'Renderização do lado do servidor', texto: '', isTopico: false, codigo: `<motion.div initial={false} animate={{ x: 100 }} />` },
        {
            titulo: 'Animações baseadas em scroll', texto: '', isTopico: false, codigo: `const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

return <motion.div drag="x" style={{ x, opacity }} />` },

        { titulo: 'Início rápido', texto: '', isTopico: true, codigo: `` },
        { titulo: 'Instalação', texto: '', isTopico: false, codigo: `npm install framer-motion` },
        { titulo: 'Importar', texto: '', isTopico: false, codigo: `import { motion } from "framer-motion"` },

        { titulo: 'Tópicos', texto: '', isTopico: true, codigo: `` },
        {
            titulo: 'Animação', texto: '', isTopico: false, codigo: `const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
    />
)` },
        {
            titulo: 'Gestos', texto: '', isTopico: false, codigo: `<motion.div
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
/>` }
    ]

    return itens;
}

export default itens;