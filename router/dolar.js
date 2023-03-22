const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
var date = month +"-"+(day-1)+"-"+year;

router.get("/" , async (req, res, next) =>{
    let url = `http://localhost/PhpExercicios/APIAtvConversorMoedaApi/`
    let result = await fetch(url)
    .then(response => {
        return response.json();
    }).catch(err => {return err.json()})
    res.send(result);
})
router.post("/", async (req, res) =>{
    console.log(req.body);
    let userValor = req.body.valor.replace(",",".");
    real = parseFloat(userValor);
    // valor = real/dolar;
    let result = await fetch("http://localhost:8090/dolar").then(response => {
        return response.json();
    })
    valor  =  real/result.cotacaoCompra
    console.log(valor);
    res.send(`valor para compra: ${result.cotacaoCompra} \nValor para venda ${result.cotacaoVenda} \nValor para conversão ${real} \nVvalor convertido em dolar ${valor.toFixed(2)} `).status(200);
})

module.exports = router;