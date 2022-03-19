function itens() {
    const itens = [
        {
            titulo: 'Animação',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``
        },
        {
            titulo: 'Keyframes',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Variantes',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Animações',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Arrastar',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'MotionValues',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Animações acionadas por rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Animações com links de rolagem',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Animações de saída',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Layout',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Layout compartilhado',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Linha de contorno',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Caminho',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Mais',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Padrões de UI',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Técnicas',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        },
        {
            titulo: 'Biblioteca de terceiros',
            texto: '',
            isTopico: false,
            url: '',
            codigo: `<motion.div animate={{ x: 100 }} />`
        }
    ]

    // Criar ID para os itens;
    const nome = 'docs_introduction_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;