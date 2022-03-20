
function itens() {
    const itens = [
        {
            titulo: 'Importar componentes inteligentes no código',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Toggle from "../canvasComponent/JQ9GA2_s0"

export default function List(props) {
    const [toggled, setToggled] = useState(false)
    
    const handleToggle = () => setToggled(!toggled)

    useEffect(() => {
        console.log("Toggle State: \${toggled ? "On" : "Off"}")
    }, [toggled])
    

    return (
        <Toggle variant={toggled ? "On" : "Off"} onTap={handleToggle} />
    )
}`,
            iframe: '',
            imagem: ''
        },

        {
            titulo: 'Criar novos componentes inteligentes',
            texto: '',
            isTopico: true,
            url: '',
            codigo: `import { motion, addPropertyControls, ControlType } from "framer"

export function Code(props) {
    const { tint, onTap } = props
    
    return (
        <motion.div
        initial={false}
        animate={{ backgroundColor: tint }}
        style={{ width: "100%", height: "100%" }}
        />
    )
}

Code.defaultProps = {
    height: 200,
    width: 200,
    tint: "#09F",
}

addPropertyControls(Code, {
    tint: {
    title: "Tint",
    type: ControlType.Color,
    },
    onTap: {
    type: ControlType.EventHandler,
    },
})`,
            iframe: '',
            imagem: ''
        }
    ]

    // Criar ID para os itens;
    const nome = 'guias_componentes_inteligentes_';
    for (let i = 0; i < itens.length; i++) {
        itens[i].id = nome + (i + 1);
    }

    return itens;
}

export default itens;