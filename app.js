let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

// Função sem parâmetro
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns, você acertou!');
        let palavraTentativas = (tentativas > 1 ? 'tentativas' : 'tentativa');
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');  // essa linha habilita o botão "Novo Jogo", desabilitando o atributo disabled caso o usuario acerte
    }else{
        let verificacao = chute;
        let textoNaTela = (verificacao > numeroSecreto ? `O número secreto é menor que ${verificacao}` : `O número secreto é maior que ${verificacao}`); //uso de operador ternário, similar à compreehension list
        exibirTextoNaTela('p',textoNaTela);
        }
    
    tentativas++;
    limparCampo();
    };
    
    function exibirMensagemInicial(){
        exibirTextoNaTela('h1','Jogo do número secreto');   //esse bloco de código chama a função para ser executada. Como parâmetro ela usa "tag"(valor da tag escolhida ao chamar a função,
        exibirTextoNaTela('p','Escolha um número entre 1 e 10');  // no caso de primeira h1) e no segundo "texto"(valor que substituirá o parâmetro)
    }



    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }


//Função para limpar o campo de inserção de chutes
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// Função com parâmetro (Executa determinada ação, porém não se espera algum retorno)
function exibirTextoNaTela(tag, texto){         
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// Função com retorno
function gerarNumeroAleatorio(){
    let qtsElementosNaLista = listaNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);  //como é esperado que essa função de fato retorne um valor, usa-se a palavra reservada "return"
    
    if (listaNumerosSorteados == numeroLimite){
        listaNumerosSorteados = [];
    }
    
        if (listaNumerosSorteados.includes(numeroEscolhido)){  //a função "includes" verifica se a lista já possui um numero (numeroEscolhido). Primeiro teste é se for verdadeiro; daí ele executa determinada ação, senão entra no else
        return gerarNumeroAleatorio(); // esse código é a recursão. Uma função existente é chamada pra retornar um valor, no caso a  geração de um número
    }else{
        listaNumerosSorteados.push(numeroEscolhido);  
        console.log(listaNumerosSorteados); //esse bloco de código permite que um número sorteado não se repita
        return numeroEscolhido;

    }

}
















