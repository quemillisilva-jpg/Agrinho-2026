// Aguarda a página carregar por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os links do menu e botões com a classe 'link-js'
    const linksRolagem = document.querySelectorAll('.link-js');

    // Adiciona a função de clique em cada um deles
    linksRolagem.forEach(link => {
        link.addEventListener('click', function(evento) {
            // Evita o comportamento padrão de pular direto na tela
            evento.preventDefault();
            
            // Pega o id do destino (ex: #servicos)
            const idDestino = this.getAttribute('href');
            const secaoDestino = document.querySelector(idDestino);
            
            // Faz a tela deslizar suavemente até a seção
            secaoDestino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

});
