function calcularbonus(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(preco > 2000){
        bonus = preco * (10 / 100);
    }
         
    let precoFinal = preco - bonus;

    resultado.innerHTML =
        `Valor do Bônus R$ ${(bonus.toFixed(2))} <br>preço Final R$ ${precoFinal.toFixed(2)}`;
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularbonus();
    }
});

function calcularcombustivel() {
    let valor = parseFloat(document.getElementById("preco").value);
    let desconto = 0;
    let valorFinal = valor;

    if (valor > 200) {
        desconto = valor * 0.05;
        valorFinal = valor - desconto;
    }

    document.getElementById("resultado").innerHTML =
        "Desconto: R$ " + desconto.toFixed(2) + "<br>" +
        "Valor final a pagar: R$ " + valorFinal.toFixed(2);
};

function calculartaxa() {
    let valor = parseFloat(document.getElementById("valorConta").value);
    let taxa = 0;
    let total = valor;

    if (valor > 100) {
        taxa = valor * 0.10;
        total = valor + taxa;
    }

    document.getElementById("resultado").innerHTML =
        "Taxa de serviço: R$ " + taxa.toFixed(2) + "<br>" +
        "Valor total da conta: R$ " + total.toFixed(2);
};

function calcularmulta() {
    let valor = parseFloat(document.getElementById("mensalidade").value);
    let dias = parseInt(document.getElementById("dias").value);

    let multa = 0;
    let total = valor;

    if (dias > 0) {
        multa = valor * 0.02;
        total = valor + multa;
    }

    document.getElementById("resultado").innerHTML =
        "Valor da multa: R$ " + multa.toFixed(2) + "<br>" +
        "Valor total a pagar: R$ " + total.toFixed(2);
};

function calcularCashback() {
    let valor = parseFloat(document.getElementById("valorCompra").value);

    let cashback = 0;
    let valorLiquido = valor;

    if (valor > 300) {
        cashback = valor * 0.05;
        valorLiquido = valor - cashback;
    }

    document.getElementById("resultado").innerHTML =
        "Valor do cashback: R$ " + cashback.toFixed(2) + "<br>" +
        "Valor líquido da compra: R$ " + valorLiquido.toFixed(2);
};

function calcularFrete() {
    let valor = parseFloat(document.getElementById("valorCompra").value);

    let frete = 0;
    let total = valor;

    if (valor >= 150) {
        frete = 0;
    } else {
        frete = 20;
        total = valor + frete;
    }

    document.getElementById("resultado").innerHTML =
        "Valor do frete: R$ " + frete.toFixed(2) + "<br>" +
        "Valor total da compra: R$ " + total.toFixed(2);
}




