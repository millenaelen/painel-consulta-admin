const lgpd = document.querySelector('.lgpd'); /*let = var, porém o let não deixa vc criar duas variáveis com msm nome e tb se tem uma condição e vc cria uma variavel, o var deixa essa var vazar da condição, já o let nao deixa sair*/
const btnLgpd = document.querySelector('.btn-lgpd');

//console.log(lgpd);
//console.log(btn-lgpd);

//se o usuário já fechou a área, mantenha a div escondida
if(localStorage.getItem('fechouLgpd')){ //pode usar pra deixar o site no modo dark etc
    lgpd.classList.add('d-none');
}

function fecharLgpd(){
    //console.log('fechou');
    lgpd.classList.add('d-none');
    localStorage.setItem('fechouLgpd','sim');
}

btnLgpd.addEventListener('click',fecharLgpd);
