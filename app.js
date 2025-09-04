paragrafo.innerHTML = "Insira um nome e sobrenome com iniciais maiúsculas";

function clicar() {
    let funcionario1 = "João Marcos";
    let funcionario2 = "Bruno Rafael";
    let funcionario3 = "Leonara";
    let usuario = document.querySelector('input').value;
    if (funcionario1 == usuario) {
        titulo.innerHTML = "ESSE CARA É COMPETENTE😎";
        paragrafo.innerHTML = '';
    } else {
        if (funcionario2 == usuario) {
            paragrafo.innerHTML = "Pior que está tendo!";
            titulo.innerHTML = "CARACTERÍSTICAS";
            l1.innerHTML = "AZEDO";
            l2.innerHTML = "CHATO";
            l3.innerHTML = "IRRITANTE";
        } else {
            if (funcionario3 == usuario) {
                paragrafo.innerHTML = "Não posso criticá-la, pois ela tem um machado!🩸☠️🩸";
                titulo.innerHTML = "";
                l1.innerHTML = "";
                l2.innerHTML = "";
                l3.innerHTML = "";
            } else {
                if (usuario == "") {
                    paragrafo.innerHTML = "Digite o nome do atendente";
                    titulo.innerHTML = "";
                    l1.innerHTML = "";
                    l2.innerHTML = "";
                    l3.innerHTML = "";
                } else {
                    paragrafo.innerHTML = "Usuário não identificado";
                    titulo.innerHTML = "";
                    l1.innerHTML = "";
                    l2.innerHTML = "";
                    l3.innerHTML = "";
                }
            }
        }
    }
}
