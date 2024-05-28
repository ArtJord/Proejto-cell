const formulario = document.getElementById('formularioContato');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

   
    console.log('Dados enviados com sucesso!'); 

    
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = 'Dados enviados com sucesso!';

    
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 2000);
});
