let filmes = JSON.parse (localStorage.getItem("filme")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block"
}
function fecharModal(){
    document.getElementById("modal").style.display = "none";

    limparCampos();
}

function salvarfilme() {
    const nomedofilme = document.getElementById("nome do filme").value.trim();
    const lançamento = document.getElementById("lançamento").value.trim();
     const produtora = document.getElementById("produtora").value.trim();
      const gênero = document.getElementById("gênero").value.trim();
       const capadofilme = document.getElementById("capa do filme").value;


      if(!nomedofilme || !lançamento) {
        alert("nome do filme e lançamento são obrigatórios!!");
        return;
      }
      const existe = filmes.find(filme => filme.nomedofilme === nomedofilme);
      
      if (existe) {
        alert("nome do filme já cadastrado!");
        return;
      }

      const novofilme = {
        id: Date.now(),
        nomedofilme,
        lançamento,
        produtora,
        gênero,
        capadofilme,
      };
      filmes.push(novofilme);
      atualizarLocalStorage();
      renderizarTabela();
      fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach(filme =>{
        tabela.innerHTML += `
        <tr>
             <td>${filme.nomedofilme}</td>    
             <td>${filme.lançamento}</td>
             <td>${filme.produtora}</td>
             <td>${filme.gênero}</td>
             <td>${filme.capadofilme}</td>
             <td>
             <button onclick="excluirCliente(${filme.id})">Excluir</button>
             </td>
             </tr>
             `
    });
}
function excluirCliente(id){
    if(!confirm("Deseja realmente excluir?")) return;

    filmes = filmes.filter(filme => filme.id !== id)
atualizarLocalStorage();
renderizarTabela();
}
function atualizarLocalStorage(){
    localStorage.setItem("filmes", JSON.stringify(filmes));
}
function limparCampos(){
    document.getElementById("nome do filme").value = "";
    document.getElementById("lançamento").value = "";
    document.getElementById("produtora").value = "";
    document.getElementById("gênero").value = "";
     document.getElementById("capa do filme").value = "";
}