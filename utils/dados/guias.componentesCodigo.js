import Imagem1 from '../../static/pages/guias/1.webp';
import Imagem2 from '../../static/pages/guias/2.webp';

function itens() {
    const itens = [
        {
            titulo: 'React.js no Canvas',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '',
            imagem: ''
        },

        {
            titulo: 'O básico',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '',
            imagem: Imagem1
        },

        {
            titulo: 'Exemplo de código',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `export default function Button(props) {
    const style = {
        display: "inline-block",
        backgroundColor: "orange",
        padding: 8,
    }

    return <div style={style}>Hello</div>
}`,
            iframe: '',
            imagem: Imagem2
        },

        {
            titulo: 'Controle de propriedades',
            texto: '',
            isTopico: true,
            url: '',
            codigo: ``,
            iframe: '',
            imagem: ''
        },

        {
            titulo: 'Integração',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion, useMotionValue } from "framer-motion"`,
            iframe: '',
            imagem: ''
        },
    ]

    // Criar ID para os itens;
    const nome = 'guias_componentes_codigo_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;