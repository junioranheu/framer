import Card from '../../components/outros/card.js';
import SpanComEfeitoAtras from '../../components/outros/spanComEfeitoAtras.js';
import CurlyBraces from '../../components/svg/curlyBraces.js';
import LogoReact from '../../components/svg/logoReact.js';

function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '', codigo: ``, iframe: '' },

        {
            titulo: '',
            texto:
                <Card Svg={<LogoReact />}
                    titulo='Componentes de código'
                    subtitulo='Crie componentes super flexiveis em React.'
                    url='/docs/guias/componentes-codigo'
                />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },

        {
            titulo: '',
            texto:
                <Card Svg={<CurlyBraces />}
                    titulo='Códigos de substituição'
                    subtitulo='Crie funções e aplique-as em qualquer elemento facilmente.'
                    url='/docs/guias/etc'
                />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },

        {
            titulo: '',
            texto: <SpanComEfeitoAtras texto='A versão melhorada e mais nova dos componentes já não usa mais a biblioteca Framer 1.0. Leia mais sobre isso nas documentações.' />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: ''
        },

        // { titulo: 'xxx', texto: '', isTopico: true, url: '', codigo: ``, iframe: '' }
    ]

    // Criar ID para os itens;
    const nome = 'docs_index_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;