function itens() {
    const itens = [
        { titulo: 'Visão geral', texto: '', isTopico: true, codigo: `` },
        { titulo: 'Animações', texto: '', isTopico: false, codigo: `<motion.div animate={{ x: 100 }} />` },
        { titulo: 'Gestos', texto: '', isTopico: false, codigo: `` },
        { titulo: 'Variantes', texto: '', isTopico: false, codigo: `` },
        { titulo: 'Renderização do lado do servidor', texto: '', isTopico: false, codigo: `` },
        { titulo: 'Animações baseadas em scroll', texto: '', isTopico: false, codigo: `` },

        { titulo: 'Início rápido', texto: '', isTopico: true, codigo: `` },
        { titulo: 'Instalação', texto: '', isTopico: false, codigo: `` },
        { titulo: 'Importar', texto: '', isTopico: false, codigo: `` },

        { titulo: 'Tópicos', texto: '', isTopico: true, codigo: `` },
        { titulo: 'Animação', texto: '', isTopico: false, codigo: `` },
        { titulo: 'Gestos', texto: '', isTopico: false, codigo: `` }
    ]

    return itens;
}

export default itens;