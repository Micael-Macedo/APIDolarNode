$(document).ready(async function () {
    let result = await fetch("http://localhost:8090/dolar").then(response => {
        return response.json();
    })
    $(".dolar").append(`<h2>Valor do dolar ${result.value[0].cotacaoCompra}</h2>`);
    $("#valorDolar").val(result.value[0].cotacaoCompra);
});