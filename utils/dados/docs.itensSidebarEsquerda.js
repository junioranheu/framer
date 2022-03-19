
function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/introducao', codigo: `` },
        { titulo: 'Exemplos', texto: '', isTopico: false, url: '/docs/exemplos', codigo: `` },

        { titulo: 'API', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Animação', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Transição', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Gestos', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/', codigo: `` },

        { titulo: 'Componentes', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Motion', texto: '', isTopico: false, url: '/docs/motion', codigo: `` },
        { titulo: 'AnimatePresence', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'LayoutGroup', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'LazyMotion', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'MotionConfig', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Reorder', texto: '', isTopico: false, url: '/docs/', codigo: `` },

        { titulo: '3D', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'LayoutCamera', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'MotionCanvas', texto: '', isTopico: false, url: '/docs/', codigo: `` },

        { titulo: 'Recursos Motion', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Acessibilidade', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Tamanho do bundle', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Guias de upgrade', texto: '', isTopico: false, url: '/docs/', codigo: `` },

        { titulo: 'Programação', texto: '', isTopico: true, url: '#', codigo: `` },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'RenderTarget', texto: '', isTopico: false, url: '/docs/', codigo: `` },
        { titulo: 'Propriedades', texto: '', isTopico: false, url: '/docs/', codigo: `` },

        { titulo: 'Comunidade', texto: '', isTopico: false, url: '#', codigo: `` },
        { titulo: 'GitHub', texto: '', isTopico: false, url: 'https://github.com/junioranheu/', codigo: `` },
        { titulo: 'Discord', texto: '', isTopico: false, url: 'https://discord.gg/RdKDenAu8d', codigo: `` }
    ]

    // Criar ID para os itens;
    const nome = 'docs_itens_sidebar_esquerda_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;