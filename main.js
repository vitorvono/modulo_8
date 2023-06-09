var form = document.getElementById("agenda-atividade");
var atividades = [];
var numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

//-- Função responsavel por adicionar linhas no html
function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputSobrenomeAtividade = document.getElementById(
    "sobrenome-atividade"
  );
  const inputPrefixoAtividade = document.getElementById("prefixo-atividade");
  const inputNumeroAtividade = document.getElementById("numero-atividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`O nome: ${inputNomeAtividade.value} ja foi inserida`);
  } else {
    atividades.push(inputNomeAtividade.value);
    atividades.push(inputSobrenomeAtividade.value);
    numeros.push(Number(inputPrefixoAtividade.value));
    numeros.push(Number(inputNumeroAtividade.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputSobrenomeAtividade.value}</td>`;
    linha += `<td>${inputPrefixoAtividade.value} ${inputNumeroAtividade.value}</td>`;
    linha += `</td>`;
    linhas += linha;
  }

  //-- Limpando o campo para novo conteudo no formulario
  inputNomeAtividade.value = "";
  inputSobrenomeAtividade.value = "";
  inputPrefixoAtividade.value = "";
  inputNumeroAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
