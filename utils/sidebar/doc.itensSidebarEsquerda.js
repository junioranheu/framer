function lista() {
    const itensSidebarEsquerda = [
        {
            item: 'Getting started', isPadding: false, subItens: [
                { item: 'Introduction', url: '/docs/introduction' },
                { item: 'Examples', url: '/docs/examples' }
            ]
        },

        {
            item: 'API', isPadding: false, subItens: [
                { item: 'Animation', url: '/docs/animation' },
                { item: 'Transition', url: '/docs/transition' },
                { item: 'Gestures', url: '/docs/gestures' },
                { item: 'MotionValue', url: '/docs/motionValue' },
                { item: 'Utilities', url: '/docs/utilities' }
            ]
        },

        {
            item: 'Components', isPadding: false, subItens: [
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
                { item: 'Introduction', url: '/docs/three-introduction' },
                { item: 'LayoutCamera', url: '/docs/layoutcamera' },
                { item: 'MotionCanvas', url: '/docs/motioncanvas' }
            ]
        },

        {
            item: 'Motion resources', isPadding: false, subItens: [
                { item: 'Accessibility', url: '/docs/accessibility' },
                { item: 'Reduce bundle size', url: '/docs/guide-reduce-bundle-size' },
                { item: 'Upgrade guides', url: '/docs/guide-upgrade' }
            ]
        },

        {
            item: 'Code in Framer', isPadding: false, subItens: [
                { item: 'Utilities', url: '/docs/framer-utilities' },
                { item: 'RenderTarget', url: '/docs/render-target' },
                { item: 'Property Controls', url: '/docs/property-controls' }
            ]
        },

        {
            item: 'Community', isPadding: false, subItens: [
                { item: 'GitHub', url: 'https://github.com/framer/motion' },
                { item: 'Discord', url: 'https://discord.com/invite/framer' }
            ]
        }
    ]

    return itensSidebarEsquerda;
}

export default lista;