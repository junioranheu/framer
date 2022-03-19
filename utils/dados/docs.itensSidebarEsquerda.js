
function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/introducao', codigo: ``, iframe: '' },
        { titulo: 'Exemplos', texto: '', isTopico: false, url: '/docs/exemplos', codigo: ``, iframe: '' },

        { titulo: 'API', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Animação', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Transição', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Gestos', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },

        { titulo: 'Componentes', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Motion', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'AnimatePresence', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'LayoutGroup', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'LazyMotion', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'MotionConfig', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Reorder', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },

        { titulo: '3D', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'LayoutCamera', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'MotionCanvas', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },

        { titulo: 'Recursos Motion', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Acessibilidade', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Tamanho do bundle', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Guias de upgrade', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },

        { titulo: 'Programação', texto: '', isTopico: true, url: '#', codigo: ``, iframe: '' },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'RenderTarget', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },
        { titulo: 'Propriedades', texto: '', isTopico: false, url: '/docs/', codigo: ``, iframe: '' },

        { titulo: 'Comunidade', texto: '', isTopico: false, url: '#', codigo: ``, iframe: '' },
        { titulo: 'GitHub', texto: '', isTopico: false, url: 'https://github.com/junioranheu/', codigo: ``, iframe: '' },
        { titulo: 'Discord', texto: '', isTopico: false, url: 'https://discord.gg/RdKDenAu8d', codigo: ``, iframe: '' }
    ]

    // Criar ID para os itens;
    const nome = 'docs_itens_sidebar_esquerda_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;