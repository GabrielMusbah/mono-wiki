function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario,boneco){
    linha = document.createElement("tr");
    tdChamp = document.createElement("td");
    tdInimigo = document.createElement("td");

    tdChamp.innerHTML = (usuario.inimigo == boneco) ? usuario.nome : ""
    tdInimigo.innerHTML = (usuario.inimigo == boneco) ? usuario.inimigo : ""

    linha.appendChild(tdChamp);
    linha.appendChild(tdInimigo);

    return linha;
}

function main(inimigo){
    let data = fazGet("https://raw.githubusercontent.com/GabrielMusbah/mono-wiki/main/dados1.txt")
    let usuario = JSON.parse(data);
    let tabela = document.getElementById("tabela")
    
    usuario.forEach(element => {
        let linha = criaLinha(element,inimigo);
        tabela.appendChild(linha);
    });

    return tabela
}

function pegar(){

    let inimigo = document.getElementById("name")
        .value

    return inimigo
    
}

let inimigo = pegar()

console.log(inimigo)

function show(inimigo){
    let match = document.getElementById("tabela")

    match.innerText = ""

    match = main(inimigo)

}


function fundo(){
    let back = document.getElementById("principal");

    back.style.backgroundImage = "url('fundo.jpg')";
}
