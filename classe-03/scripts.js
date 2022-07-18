const nome = document.querySelector("#nome")
const img = document.querySelector("#img")
const habUm = document.querySelector("#habUm")
const habDois = document.querySelector("#habDois")
const botao = document.querySelector("button")
const input = document.querySelector("input")

botao.addEventListener("click", () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    .then(resposta => resposta.json())
    .then(pokemon => {
        nome.textContent = pokemon.name
        img.src = pokemon.sprites.front_default
        habUm.textContent = pokemon.abilities[0].ability.name
        habDois.textContent = pokemon.abilities[1].ability.name
    })


})


