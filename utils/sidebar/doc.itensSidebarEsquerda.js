function lista() {
    const itensSidebarEsquerda = [
        {
            item: 'Guia de iniciação', isPadding: false, subItens: [
                { item: 'Introdução', url: '/docs/introduction' },
                { item: 'Exemplos', url: '/docs/examples' }
            ]
        },

        {
            item: 'API', isPadding: false, subItens: [
                { item: 'Animação', url: '/docs/animation' },
                { item: 'Transição', url: '/docs/transition' },
                { item: 'Gestos', url: '/docs/gestures' },
                { item: 'Utilidades', url: '/docs/utilities' }
            ]
        },

        {
            item: 'Componentes', isPadding: false, subItens: [
                { item: 'Motion', url: '/docs/motion' },
                { item: 'AnimatePresence', url: '/docs/animate-presence' },
                { item: 'LayoutGroup', url: '/docs/layout-group' },
                { item: 'LazyMotion', url: '/docs/lazy-motion' },
                { item: 'MotionConfig', url: '/docs/motion-config' },
                { item: 'Reorder', url: '/docs/reorder' }
            ]
        },

        {
            item: '3D', isPadding: false, subItens: [
                { item: 'Introdução', url: '/docs/three-introduction' },
                { item: 'LayoutCamera', url: '/docs/layoutcamera' },
                { item: 'MotionCanvas', url: '/docs/motioncanvas' }
            ]
        },

        {
            item: 'Recursos Motion', isPadding: false, subItens: [
                { item: 'Acessibilidade', url: '/docs/accessibility' },
                { item: 'Tamanho do bundle', url: '/docs/guide-reduce-bundle-size' },
                { item: 'Guias de upgrade', url: '/docs/guide-upgrade' }
            ]
        },

        {
            item: 'Programação', isPadding: false, subItens: [
                { item: 'Utilidades', url: '/docs/framer-utilities' },
                { item: 'RenderTarget', url: '/docs/render-target' },
                { item: 'Propriedades', url: '/docs/property-controls' }
            ]
        },

        {
            item: 'Comunidade', isPadding: false, subItens: [
                { item: 'GitHub', url: 'https://github.com/junioranheu/' },
                { item: 'Discord', url: 'https://discord.gg/RdKDenAu8d' }
            ]
        }
    ]

    return itensSidebarEsquerda;
}

export default lista;