function lista() {
    const itensSidebarDireita = [
        {
            item: 'On this page', subItens: []
        },

        {
            item: 'Overview', subItens: [
                { item: 'Animations', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'Variants', url: '/docs/xxx' },
                { item: 'Server-side rendering', url: '/docs/xxx' },
                { item: 'MotionValues', url: '/docs/xxx' },
                { item: 'Scroll-based animations', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Quick Start', subItens: [
                { item: 'Installation', url: '/docs/xxx' },
                { item: 'Importing', url: '/docs/xxx' }
            ]
        },

        {
            item: 'Topics', subItens: [
                { item: 'Animation', url: '/docs/xxx' },
                { item: 'Gestures', url: '/docs/xxx' },
                { item: 'MotionValue', url: '/docs/xxx' }
            ]
        }
    ]

    return itensSidebarDireita;
}

export default lista;