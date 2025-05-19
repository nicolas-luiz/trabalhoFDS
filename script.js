document.getElementById('botaoMensagem').addEventListener('click', function() {
    const mensagens = [
        "Continue progredindo! Seu potencial é ilimitado.",
        "Bem-vindo à sua página pessoal!",
        "Cada dia é uma nova oportunidade para aprender algo novo.",
        "Você está no caminho certo para se tornar um ótimo programador!",
        "A persistência é o caminho do êxito."
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    const elementoMensagem = document.getElementById('mensagem');
    
    elementoMensagem.textContent = mensagemAleatoria;
    elementoMensagem.style.display = 'block';
});