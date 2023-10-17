function recuperar() {
    var total = localStorage.getItem('inscritos');
    /*  if (total !== null) {
          alert("Total de inscritos: " + total);
      } else {
          total = prompt('Digite o total de inscritos: ');
          localStorage.setItem('inscritos', total);
      } */
    document.getElementById('inscritos').value = total;

}

function remover() {
    localStorage.removeItem('inscritos')
}
function gebi(id) {
    return document.getElementById(id)
}
function multiplicarCafe() {
    let valorN1 = parseFloat(gebi("quantidade").value)
    let valorN2 = parseFloat(gebi("preco").value)
    let totalcafe = valorN1 * valorN2
    gebi('totalCafe').value = totalcafe
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarComida()
}
function multiplicarBolo() {
    let valorN1 = parseFloat(gebi("quantidade2").value)
    let valorN2 = parseFloat(gebi("preco2").value)
    let totalbolo = valorN1 * valorN2
    gebi('totalBolo').value = totalbolo
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarComida()
}
function multiplicarCachorro() {
    let valorN1 = parseFloat(gebi("quantidade3").value)
    let valorN2 = parseFloat(gebi("preco3").value)
    let totalcachorro = valorN1 * valorN2
    gebi('totalCachorro').value = totalcachorro
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarComida()
}
function multiplicarBanner() {
    let valorN1 = parseFloat(gebi("quantidadeDivulgacao").value)
    let valorN2 = parseFloat(gebi("precoDivulgacao").value)
    let totalbanner = valorN1 * valorN2
    gebi('totalBanner').value = totalbanner
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarItens()
}
function multiplicarCracha() {
    let valorN1 = parseFloat(gebi("quantidadeDivulgacao2").value)
    let valorN2 = parseFloat(gebi("precoDivulgacao2").value)
    let totalcracha = valorN1 * valorN2
    gebi('totalCracha').value = totalcracha
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarItens()
}
function multiplicarCamiseta() {
    let valorN1 = parseFloat(gebi("quantidadeDivulgacao3").value)
    let valorN2 = parseFloat(gebi("precoDivulgacao3").value)
    let totalcamiseta = valorN1 * valorN2
    gebi('totalCamiseta').value = totalcamiseta
    if (valorN1 < 0 || valorN2 < 0) {
        alert("Os valores não podem ser negativos.");
        return;
    }
    somarItens()
}

function somarComida() {
    let valorN1 = parseFloat(gebi("totalCafe").value)
    let valorN2 = parseFloat(gebi("totalBolo").value)
    let valorN3 = parseFloat(gebi("totalCachorro").value)
    let totalalimento = valorN1 + valorN2 + valorN3
    gebi('totalAlimento').value = totalalimento.toFixed(2)
    gebi('totalAlimento2').value = (totalalimento / 5.05).toFixed(2)
    gebi('totalAlimento3').value = (totalalimento / 5.33).toFixed(2)
    somarTudo()
}
function somarItens() {
    let valorN1 = parseFloat(gebi("totalBanner").value)
    let valorN2 = parseFloat(gebi("totalCracha").value)
    let valorN3 = parseFloat(gebi("totalCamiseta").value)
    let totalitens = valorN1 + valorN2 + valorN3
    gebi('totalItens').value = totalitens.toFixed(2)
    gebi('totalItens2').value = (totalitens / 5.05).toFixed(2)
    gebi('totalItens3').value = (totalitens / 5.33).toFixed(2)
    somarTudo()
}

function somarTudo() {
    let valorN1 = parseFloat(gebi("totalAlimento").value)
    let valorN2 = parseFloat(gebi("totalItens").value)
    let totalevento = valorN1 + valorN2
    gebi('totalEvento').value = totalevento.toFixed(2)
    gebi('totalEvento2').value = (totalevento / 5.05).toFixed(2)
    gebi('totalEvento3').value = (totalevento / 5.33).toFixed(2)
}

function montarTexto() {
    let qntCafe = gebi("quantidade").value
    let precoCafe = gebi("preco").value
    let precoTotal = gebi("totalCafe").value
    let qntBolo = gebi("quantidade2").value
    let precoBolo = gebi("preco2").value
    let totalBolo = gebi("totalBolo").value
    let qntCachorro = gebi("quantidade3").value
    let precoCachorro = gebi("preco3").value
    let totalCachorro = gebi("totalCachorro").value
    let qntBanner = gebi("quantidadeDivulgacao").value
    let precoBanner = gebi("precoDivulgacao").value
    let totalBanner = gebi("totalBanner").value
    let qntCracha = gebi("quantidadeDivulgacao2").value
    let precoCracha = gebi("precoDivulgacao2").value
    let totalCracha = gebi("totalCracha").value
    let qntCamiseta = gebi("quantidadeDivulgacao3").value
    let precoCamiseta = gebi("precoDivulgacao3").value
    let totalCamiseta = gebi("totalCamiseta").value
    let totalComida = gebi("totalAlimento").value
    let totalItens = gebi("totalItens").value
    let tudo = gebi("totalEvento").value
    gebi('email').value = qntCafe + " cafés foram comprados, cada um custava R$" + precoCafe + ", no total foram arrecadados R$" + precoTotal + ", " + qntBolo + " bolos foram comprados, cada um custava R$" + precoBolo + ", no total foram arrecadados R$" + totalBolo + ", " + qntCachorro + " cachorros-quentes foram comprados, cada um custava R$" + precoCachorro + ", no total foram arrecadados R$" + totalCachorro + ", " + qntBanner + " banners foram comprados, cada um custava R$" + precoBanner + ", no total foram arrecadados R$" + totalBanner + ", " + qntCracha + " crachás foram comprados, cada um custava R$" + precoCracha + ", no total foram arrecadados R$" + totalCracha + ", " + qntCamiseta + " camisetas foram compradas, cada uma custava R$" + precoCamiseta + ", no total foram arrecadados R$" + totalCamiseta + ". " + "No total, com todos os alimentos vendidos foram arrecadados R$" + totalComida + ", com todos os produtos vendidos foram arrecadados R$" + totalItens + ", com todo o evento, foram arrecadados R$" + tudo + ". Assinado: Igor Soares, Célia Camili, Bianca Torcatto."

    const btnEnviar = gebi('enviar')
    btnEnviar.removeAttribute('disabled')
}