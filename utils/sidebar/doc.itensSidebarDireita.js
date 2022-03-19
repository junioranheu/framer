function lista() {
    const itensSidebarDireita = [
        {
            item: 'Nessa página<br/><br/>Visão geral', isSidebarDireita: true, subItens: [
                { item: 'Animações', url: '#aea' },
                { item: 'Gestos', url: '#xxx' },
                { item: 'Variantes', url: '#xxx' },
                { item: 'Renderização do lado do servidor', url: '#xxx' },
                { item: 'Animações baseadas em scroll', url: '#xxx' }
            ]
        },
 
        {
            item: 'Início rápido', isSidebarDireita: true, subItens: [
                { item: 'Instalação', url: '#xxx' },
                { item: 'Importar', url: '#xxx' }
            ]
        },

        {
            item: 'Tópicos', isSidebarDireita: true, subItens: [
                { item: 'Animação', url: '#xxx' },
                { item: 'Gestos', url: '#xxx' }
            ]
        }
    ]

    return itensSidebarDireita;
}

export default lista;