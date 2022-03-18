function lista() {
    const itensSidebarDireita = [
        {
            item: 'Nessa página<br/><br/>Visão geral', isPadding: true, subItens: [
                { item: 'Animações', url: '/docs/xxx' },
                { item: 'Gestos', url: '/docs/xxx' },
                { item: 'Variantes', url: '/docs/xxx' },
                { item: 'Renderização do lado do servidor', url: '/docs/xxx' },
                { item: 'Animações baseadas em scroll', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Início rápido', isPadding: true, subItens: [
                { item: 'Instalação', url: '/docs/xxx' },
                { item: 'Importar', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Tópicos', isPadding: true, subItens: [
                { item: 'Animação', url: '/docs/xxx' },
                { item: 'Gestos', url: '/docs/xxx' }
            ]
        }
    ]

    return itensSidebarDireita;
}

export default lista;