const cep = document.querySelector("#cep")
const cidade = document.querySelector("#cidade")
const rua = document.querySelector("#rua")

cep.addEventListener("change", () => {
    if(cep.value.length !== 8) {
        console.log("CEP Inválido - Digite novamente")
        cidade.value = ""
        rua.value = ""
        return
    }
    const httpReq = fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    httpReq.then(resposta => {
        const promiseEnd = resposta.json()

        promiseEnd.then(endereco => {
            cidade.value = endereco.localidade
            rua.value = endereco.logradouro
        })
    })
    
})