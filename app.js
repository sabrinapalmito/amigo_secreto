let lista = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }

  if (lista.includes(nome)) {
    alert("Este nome já foi adicionado.");
    input.value = "";
    return;
  }

  lista.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  lista.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (lista.length < 2) {
    resultado.textContent = "Adicione pelo menos 2 nomes.";
    return;
  }

  const sorteado = lista[Math.floor(Math.random() * lista.length)];
  resultado.textContent = `🎉 O(a) sorteado(a) foi: ${sorteado}!`;
}

function limparTudo() {
  lista = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
