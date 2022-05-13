//Variables
const form = document.getElementById("form");

//Funciones
const cryptoApi = () =>{
    let entrada = document.getElementById("entrada").value.toUpperCase();

    fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${entrada}USDT`)
        .then(response => response.json())
        .then(data => console.log(entrada, data, new Date()));

    fetch("https://api.bluelytics.com.ar/v2/latest")
        .then(response => response.json())
        .then(dolar => console.log(dolar.blue.value_buy, new Date()))
}
//EventListeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    cryptoApi();
});
