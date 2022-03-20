
function itens() {
    const itens = [
        { titulo: 'Guias', texto: '', isTopico: true, url: '', codigo: ``, iframe: '' },
        { titulo: 'Componentes de código', texto: '', isTopico: false, url: '/docs/guias/componentes-codigo', codigo: ``, iframe: '' },
        { titulo: 'Componentes inteligentes', texto: '', isTopico: false, url: '/docs/guias/componentes-inteligentes', codigo: ``, iframe: '' },
        { titulo: 'Códigos de substituição', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },
        { titulo: 'Autosizing', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },
        { titulo: 'Compartilhamento', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },
        { titulo: 'Importação', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },
        { titulo: 'Migração', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },
        { titulo: 'Handshake (beta)', texto: '', isTopico: false, url: '/docs/guias/etc', codigo: ``, iframe: '' },

        { titulo: 'Comunidade', texto: '', isTopico: true, url: '', codigo: ``, iframe: '' },
        { titulo: 'GitHub', texto: '', isTopico: false, url: 'https://github.com/junioranheu/', codigo: ``, iframe: '' },
        { titulo: 'Discord', texto: '', isTopico: false, url: 'https://discord.gg/RdKDenAu8d', codigo: ``, iframe: '' }
    ]

    // Criar ID para os itens;
    const nome = 'guias_itens_sidebar_esquerda_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;