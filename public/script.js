$(document).ready(async function () {
    let result = await fetch("http://localhost:8090/dolar").then(response => {
        return response.json();
    })
    console.log(result);
    $(".dolar").append(`<h2>Valor do dolar ${result.cotacaoCompra}</h2>`);
    $("#valorDolar").val(result.cotacaoCompra);
});