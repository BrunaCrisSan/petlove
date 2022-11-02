// selecionando o elemento necessário
const element = document.querySelector(".pagination");
let totalPages = 20;
let page = 10;

//função de aling com parâmetros de passagem e adicionando elemento interno que é a tag ul
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //mostrar o próximo botão se o valor da página for maior que 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="bi bi-chevron-double-left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg></i></span></li>`;
  }

  if(page > 2){ //se o valor da página for menor que 2, adicione 1 após o botão anterior
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //se o valor da página for maior que 3, adicione isso (...) após o primeiro li ou página
      liTag += `<li class="dots"><span>---</span></li>`;
    }
  }

  // quantas páginas ou li mostram antes do li atual
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // quantas páginas ou li mostram após o li atual
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //se plength for maior que o comprimento totalPage então continue
      continue;
    }
    if (plength == 0) { //se plength for 0, adicione +1 no valor de plength
      plength = plength + 1;
    }
    if(page == plength){ //se a página for igual a plength, atribua a string ativa na variável ativa
      active = "active";
    }else{ //senão deixe vazio para a variável ativa
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if(page < totalPages - 1){ //se o valor da página for menor que o valor totalPage por -1, mostre o último li ou página
    if(page < totalPages - 2){ //se o valor da página for menor que o valor de totalPage em -2, adicione isso (...) antes do último li ou páginaSe o valor da página for menor que o valor de totalPage em -2, adicione isso (...) antes do último li ou página
      liTag += `<li class="dots"><span>---</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //mostre o próximo botão se o valor da página for menor que totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span><i class="bi bi-chevron-double-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg></i></span></li>`;
  }
  element.innerHTML = liTag; //adicione a tag li dentro da tag ul
  return liTag; //retorne a tag li
}