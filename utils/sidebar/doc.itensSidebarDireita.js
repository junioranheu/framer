function lista() {
    const itensSidebarDireita = [
        {
            item: 'On this page<br/><br/>Overview', isPadding: true, subItens: [
                { item: 'Animations', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'Variants', url: '/docs/xxx' },
                { item: 'Server-side rendering', url: '/docs/xxx' },
                { item: 'MotionValues', url: '/docs/xxx' },
                { item: 'Scroll-based animations', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Quick Start', isPadding: true, subItens: [
                { item: 'Installation', url: '/docs/xxx' },
                { item: 'Importing', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Topics', isPadding: true, subItens: [
                { item: 'Animation', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'MotionValue', url: '/docs/xxx' }
            ]
        }
    ]

    return itensSidebarDireita;
}

export default lista;