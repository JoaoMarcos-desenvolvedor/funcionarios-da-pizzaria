p2.innerHTML = "Digite nome e sobrenome com letras maiúsculas";


function clicar() {
  let funcionario1 = "João Marcos";
  let funcionario2 = "Bruno Rafael";
  let funcionario3 = "Leonara";
  let funcionario = document.querySelector("input").value;
  if (funcionario == funcionario1) {
    p2.innerHTML = "";
    titulo.innerHTML = "ESSE CARA É COMPETENTE!";
    l1.innerHTML = "";
    l2.innerHTML = "";
    l3.innerHTML = "";
  } else {
    if (funcionario == funcionario2) {
      titulo.innerHTML = "SUAS CARACTERÍSTICAS:";
      l1.innerHTML = "CHATO";
      l2.innerHTML = "IRRITANTE";
      l3.innerHTML = "AZEDO";
      p2.innerHTML = "";
    } else {
      if (funcionario == funcionario3) {
        p2.innerHTML = "Não posso criticá-la, pois ela tem um machado afiado";
        titulo.innerHTML = "";
        l1.innerHTML = "";
        l2.innerHTML = "";
        l3.innerHTML = "";
      } else {
        if (funcionario == "") {
          p2.innerHTML = "Insira um nome";
          titulo.innerHTML = "";
          l1.innerHTML = "";
          l2.innerHTML = "";
          l3.innerHTML = "";
        } else {
          p2.innerHTML = "Usuário ainda não cadastrado";
        }
      }
    }
  }
}
