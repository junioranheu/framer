import Card from '../../components/outros/card.js';
import Motion from '../../components/svg/motion.js';

function itens() {
    const itens = [
        { titulo: 'Guia de iniciação', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },

        {
            titulo: '',
            texto:
                <Card Svg={<Motion />}
                    Img={''}
                    titulo='Comece aqui'
                    subtitulo='Aprenda mais sobre os recursos e comece explorando alguns exemplos interativos.'
                    url='/docs/introducao'
                />,
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '', 
            imagem: ''
        },

        { titulo: 'Framer Motion', texto: 'Uma biblioteca pronta para produção de código aberto para React.', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' },
        { titulo: 'Código', texto: '', isTopico: true, url: '', codigo: ``, iframe: '', imagem: '' }
    ]

    // Criar ID para os itens;
    const nome = 'docs_index_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;