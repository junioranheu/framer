
function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/introducao', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Exemplos', texto: '', isTopico: false, url: '/docs/exemplos', codigo: ``, iframe: '', imagem: '' },

        { titulo: 'API', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Animação', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Transição', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Gestos', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },

        { titulo: 'Componentes', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Motion', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'AnimatePresence', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'LayoutGroup', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'LazyMotion', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'MotionConfig', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Reorder', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },

        { titulo: '3D', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Introdução', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'LayoutCamera', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'MotionCanvas', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },

        { titulo: 'Recursos Motion', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Acessibilidade', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Tamanho do bundle', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Guias de upgrade', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },

        { titulo: 'Programação', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Utilidades', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'RenderTarget', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Propriedades', texto: '', isTopico: false, url: '/docs/etc', codigo: ``, iframe: '', imagem: '' },

        { titulo: 'Comunidade', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: ''},
        { titulo: 'GitHub', texto: '', isTopico: false, url: 'https://github.com/junioranheu/', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Discord', texto: '', isTopico: false, url: 'https://discord.gg/RdKDenAu8d', codigo: ``, iframe: '', imagem: '' }
    ]

    // Criar ID para os itens;
    const nome = 'docs_itens_sidebar_esquerda_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;