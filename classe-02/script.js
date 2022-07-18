const select = document.querySelector("#cm")
const textHigh = document.querySelector("#high")
const textVol = document.querySelector("#vol")
const textBuy = document.querySelector("#buy")

select.addEventListener("change", () => {
    fetch(`https://www.mercadobitcoin.net/api/${select.value}/ticker/`)
    .then(resposta => resposta.json())
    .then(resultadoJson => {
        const high = Number(resultadoJson.ticker.high).toFixed(2)
        const vol = Number(resultadoJson.ticker.vol).toFixed(2)
        const buy = Number(resultadoJson.ticker.buy).toFixed(2)

        textHigh.textContent = high
        textVol.textContent = vol
        textBuy.textContent = buy
    })
    
})