function fraseAleatoria() {
    const frase = [
        'Aprendi a centralizar uma div.',
        'Front-end é legal também.',
        'Finalmente aprendi React!',
        'Programando e relaxando...',
        'Oi, né?',
        'Pensei que nunca aprenderia React...',
        'Como centraliza uma div mesmo?',
        'How to centralize a div Stackoverflow',
        'Google: Flexbox Stackoverflow',
        'Erro 404',
        'Esse projeto deu um trampo, ein?',
        'Me segue no GitHub aqui ao lado!',
        'Back-end > Front-end'
    ];

    const random = Math.floor(Math.random() * frase.length);
    return frase[random];
}

export default fraseAleatoria;