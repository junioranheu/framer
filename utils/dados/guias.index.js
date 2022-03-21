import Card from '../../components/outros/card.js';
import SpanComEfeitoAtras from '../../components/outros/spanComEfeitoAtras.js';
import CurlyBraces from '../../components/svg/curlyBraces.js';

function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },

        {
            titulo: '',
            texto:
                <Card Svg={<CurlyBraces />}
                    Img={''}
                    titulo='Componentes de código'
                    subtitulo='Crie componentes super flexiveis em React diretamente em nossa framework.'
                    url='/docs/guias/componentes-codigo'
                />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '',
            imagem: ''
        },

        {
            titulo: '',
            texto: <SpanComEfeitoAtras texto='A versão melhorada e mais nova dos componentes já não usa mais a biblioteca Framer 1.0. Leia mais sobre isso nas documentações.' />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '',
            imagem: ''
        }
    ]

    // Criar ID para os itens;
    const nome = 'guias_index_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;