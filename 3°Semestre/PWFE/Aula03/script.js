const modalcli = document.querySelector("#modalcli")
var clientes = localStorag.getItem(("clientes")) || [];

function salvarlocal(){
    localStorage.setItem(clientes,JSON.stringify(clientes));
    window.location.reload();
}

function abrirModal() {
    modalcli.style.display = "block";
}

function fecharModal() {
    modalcli.style.display = "none";
}

const formcli = document.querySelector("#formCli");
formcli.addEventListener("submit", e => {
    e.preventDefault();
    const obj = {
        cpf: formcli.cpf.value,
        nome: formcli.nome.value,
        sobrenome: formcli.sobrenome.value,
        nascimento: formcli.nascimento.value
    }
    clientes.push(obj);
    salvarlocal();
})

function renderizarTabela() {
    const corpo = document.querySelector("#dados")
    corpo.innerHTML="";
    clientes.forEach((c, i) => {
        corpo.innerHTML += `
        <tr>
         <td>${c.cpf}</td>
         <td>${c.nome}</td>
         <td>${c.sobrenome}</td>
         <td>${c.nascimento}</td>
         <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })

}
function excluir(indice) {
    clientes.splice(indice, 1);
    renderizarTabela();
    salvarlocal();
}



