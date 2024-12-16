//selecionando os elementos html que serao manipulados

var olho = document.querySelector('.olho');
var inputSenha = document.querySelector('#senha');

//console.log(olho);
//console.log(inputSenha);

//função que será executada quando ocorrer o evento de 'click' no 'olho'
function alterarInput(){
    console.log('função acionada');

    //guardando o tipo que está na página
    var tipoInput = inputSenha.getAttribute('type');

    if(tipoInput == 'password'){
        inputSenha.setAttribute('type','text');
        olho.setAttribute('src','img/open.svg');
    }

    else{
        inputSenha.setAttribute('type','password');
        olho.setAttribute('src','img/closed.svg');
    }
}

//evento que acionará a função
olho.addEventListener('click',alterarInput);
