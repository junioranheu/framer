function fraseAleatoria() {
    const frase = [
        'Aprendi a centralizar uma div.',
        'Front-end é legal também.',
        'Finalmente aprendi React!',
        'Programando e relaxando...',
        'Oi, né?',
        'Pensei que nunca aprenderia React...',
        'Como centraliza uma div mesmo?',
        'How to centralize a div Stackoverflow.',
        'Google: Flexbox Stackoverflow.',
        'Erro 404...',
        'Esse projeto deu um trampo, ein?',
        'Veja meus projetos do Github aqui do lado.',
        'Back-end > Front-end?!',
        'Talvez front-end > back-end.',
        'Testando... 1, 2, 3.'
    ];

    const random = Math.floor(Math.random() * frase.length);
    return frase[random];
}

export default fraseAleatoria;