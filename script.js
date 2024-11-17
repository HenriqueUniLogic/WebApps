// Função de contagem regressiva
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 de Dezembro

    if (now > christmas) {
        christmas.setFullYear(now.getFullYear() + 1);
    }

    const diff = christmas - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.textContent = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o Natal!`;
}

window.onload = function() {
    const audio = document.getElementById('background-music');

    // Aguarda a primeira interação do usuário (por exemplo, um clique na página)
    document.body.addEventListener('click', function() {
        audio.play().catch(error => {
            console.log('Erro ao tentar reproduzir o áudio:', error);
        });
        document.body.removeEventListener('click', arguments.callee); // Remove o ouvinte para que o áudio não toque várias vezes
    });
};


// Função para inicializar a neve
function initializeSnowflakes() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        // Posição horizontal aleatória na tela
        const randomX = Math.random() * window.innerWidth;  // Posição X aleatória na largura da tela
        const randomDelay = Math.random() * 5;  // Atraso aleatório para a animação
        const randomDuration = 5 + Math.random() * 5;  // Duração aleatória da animação

        // Definindo a posição horizontal e os parâmetros de animação
        snowflake.style.left = `${randomX}px`; // Posição X do floco de neve
        snowflake.style.animationDelay = `${randomDelay}s`;
        snowflake.style.animationDuration = `${randomDuration}s`;
    });
}


// Exibir fato aleatório
function showFact() {
    const facts = [
        "O Natal era originalmente uma festa pagã.",
        "A árvore de Natal foi trazida para os EUA pelos alemães.",
        "A canção 'Jingle Bells' foi a primeira a ser tocada no espaço.",
        "Acredita-se que o Papai Noel tem 1.400 anos!",
        // Adicione mais fatos conforme necessário
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factText').textContent = randomFact;
    
    // Exibir o modal do Bootstrap
    $('#factModal').modal('show');
}

// Atualizando contagem e flocos de neve
setInterval(updateCountdown, 1000);
initializeSnowflakes();
