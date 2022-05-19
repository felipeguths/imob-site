const listaDeImoveisParaComprarComFiltro = []


const listaDeImoveisParaComprar = [
    {
        id: 1,
        cidade: "São Paulo",
        bairro: "azul",
        tipo: "casa",
        quantidadeQuartos: 2,
        metragem: 70,
        imagem: "images/mansão-piscina.jpg"
    },
    {
        id: 2,
        cidade: "São Paulo",
        bairro: "preto",
        tipo: "apto",
        quantidadeQuartos: 3,
        metragem: 110,
        imagem: "images/mansão-piscina.jpg"
    },
    {
        id: 3,
        cidade: "Santos",
        bairro: "preto",
        tipo: "studio",
        quantidadeQuartos: 1,
        metragem: 35,
        imagem: "images/mansão-piscina.jpg"
    },
    {
        id: 4,
        cidade: "São Paulo",
        bairro: "azul",
        tipo: "casa",
        quantidadeQuartos: 4,
        metragem: 135,
        imagem: "images/mansão-piscina.jpg"
    },
    {
        id: 5,
        cidade: "Osasco",
        bairro: "rosa",
        tipo: "studio",
        quantidadeQuartos: 1,
        metragem: 43,
        imagem: "images/mansão-piscina.jpg"
    },
]

console.log(listaDeImoveisParaComprar);

//transformando obj JS em HTML

function montaHtmlDoImovelParaComprar(imovel){
    return `<div> 
                <p> ${imovel.id} </p>
                <p> ${imovel.cidade} </p>
                <p> ${imovel.bairro} </p>
                <p> ${imovel.tipo} </p>
                <p> ${imovel.quantidadeQuartos} </p>
                <p> ${imovel.metragem} </p>   
                <img src="${imovel.imagem}" class="card-img-top" alt="..."> 
            </div>`
} 
//colocando html na pagina 

function colocaHtmlNaPagina(imovel){
    const htmlImovel = montaHtmlDoImovelParaComprar(imovel)
    document.getElementById("lista-de-imoveis").innerHTML += htmlImovel
}

// colocando no html todos imoveis

function colocaNoHtmlTodosImoveis(listaDeImoveisParaComprar){
    for (const imovel of listaDeImoveisParaComprar) {
        colocaHtmlNaPagina(imovel)
        
    }
}
colocaNoHtmlTodosImoveis(listaDeImoveisParaComprar)

// function mostraImovel(listaDeImoveisParaComprar){
//     console.log(`Imovel de id: ${listaDeImoveisParaComprar[1].id}, na cidade de ${listaDeImoveisParaComprar.cidade}, no bairro ${listaDeImoveisParaComprar.bairro}, de tipo ${listaDeImoveisParaComprar.tipo}, com ${listaDeImoveisParaComprar.quantidadeQuartos} quarto(s) e ${listaDeImoveisParaComprar.metragem} m²`); 
// }
// mostraImovel(listaDeImoveisParaComprar)

// coisas para fazer:
// transformar objeto JS em HTML;
// colocar HTML na pagina;
// fazer para lista toda.

// coisas para fazer 2
// fazer filtro funcionar no html;
// pegar infos do html
// fazer funcionar o filtro a partir das infos do html

// lição de casa 
// fazer uma tabela