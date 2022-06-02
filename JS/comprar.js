const listaDeImoveis = [
    {
        titulo: "Apto ",
        modelo: "VENDER",
        tipo: "APTO",
        valor: 2525.5,
        metragem: 80,
        ehPertoDeMetro: true,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: true,
        temSalaoDeJogos: true,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 3,
        numeroDeBanheiros: 2,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Preto",
        descricao: "descricao tal"
    },
    {
        titulo: "Casa de rico",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 352525.5,
        metragem: 160,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 4,
        numeroDeBanheiros: 4,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Azul",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Casa de campo",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 122525.5,
        metragem: 110,
        ehPertoDeMetro: false,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: false,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 3,
        numeroDeBanheiros: 4,
        cidade: "Santos",
        estado: "SP",
        bairro: "Verde",
        descricao: "descricao da casa de campo"

    },
    {
        titulo: "Mansão do Neyjr",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 2352525.5,
        metragem: 260,
        ehPertoDeMetro: false,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: true,
        temSalaoDeJogos: true,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 4,
        numeroDeQuartos: 5,
        numeroDeBanheiros: 6,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Preto",
        descricao: "descricao da mansão do menino Ney"
    },
    {
        titulo: "Apartamento pequeno",
        modelo: "VENDER",
        tipo: "APTO",
        valor: 52525.5,
        metragem: 40,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: false,
        temRuaSilenciosa: true,
        temAcademia: true,
        temSalaoDeJogos: true,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 0,
        numeroDeQuartos: 1,
        numeroDeBanheiros: 1,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Azul",
        descricao: "descricao Studio pequeno em condominio"
    },
    {
        titulo: "Mansão super",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 9352525.5,
        metragem: 460,
        ehPertoDeMetro: false,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: true,
        temSalaoDeJogos: true,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 5,
        numeroDeQuartos: 5,
        numeroDeBanheiros: 7,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Azul",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Casarão",
        modelo: "VENDER",
        tipo: "CASA",
        valor: 8525.5,
        metragem: 160,
        ehPertoDeMetro: false,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: false,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 2,
        numeroDeQuartos: 3,
        numeroDeBanheiros: 3,
        cidade: "Barueri",
        estado: "SP",
        bairro: "Branco",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel tal 2",
        modelo: "COMPRAR",
        tipo: "APTO",
        valor: 352525.5,
        metragem: 160,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: false,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 4,
        numeroDeBanheiros: 4,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Azul",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel santos",
        modelo: "VENDER",
        tipo: "CASA",
        valor: 1352525.5,
        metragem: 560,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: false,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 5,
        numeroDeQuartos: 7,
        numeroDeBanheiros: 6,
        cidade: "Santos",
        estado: "SP",
        bairro: "Branco",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel santo andré",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 352525.5,
        metragem: 160,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: false,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 4,
        numeroDeBanheiros: 4,
        cidade: "Santo André",
        estado: "SP",
        bairro: "Ciclano",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel osasco",
        modelo: "COMPRAR",
        tipo: "APTO",
        valor: 452525.5,
        metragem: 230,
        ehPertoDeMetro: false,
        temPiscina: true,
        temChurrasqueira: true,
        temRuaSilenciosa: true,
        temAcademia: true,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 4,
        numeroDeQuartos: 5,
        numeroDeBanheiros: 5,
        cidade: "Osasco",
        estado: "SP",
        bairro: "fulano",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel casa sp",
        modelo: "COMPRAR",
        tipo: "CASA",
        valor: 352525.5,
        metragem: 160,
        ehPertoDeMetro: true,
        temPiscina: false,
        temChurrasqueira: false,
        temRuaSilenciosa: true,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: true,
        aceitaPET: true,
        numeroDeVagas: 3,
        numeroDeQuartos: 4,
        numeroDeBanheiros: 4,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Azul",
        descricao: "descricao tal 2"
    },
    {
        titulo: "Imovel ape",
        modelo: "VENDER",
        tipo: "APTO",
        valor: 252525.5,
        metragem: 85,
        ehPertoDeMetro: false,
        temPiscina: false,
        temChurrasqueira: true,
        temRuaSilenciosa: false,
        temAcademia: false,
        temSalaoDeJogos: false,
        temPlayground: false,
        aceitaPET: true,
        numeroDeVagas: 2,
        numeroDeQuartos: 3,
        numeroDeBanheiros: 3,
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Preto",
        descricao: "descricao tal 2"
    },
]

// fazer uma tabela
function montaHtmlDoImovelParaComprar(imovel) {
  return `<tr>
                <td> ${imovel.titulo}</td>
                <td> ${imovel.modelo} </td>
                <td> ${imovel.tipo} </td>
                <td> ${formataValorEmReal(imovel.valor)} </td>
                <td> ${imovel.metragem} </td>
                <td> ${imovel.ehPertoDeMetro} </td>
                <td> ${imovel.temPiscina} </td>
                <td> ${imovel.temChurrasqueira} </td>
                <td> ${imovel.temRuaSilenciosa} </td>
                <td> ${imovel.temAcademia} </td>
                <td> ${imovel.temSalaoDeJogos} </td>
                <td> ${imovel.temPlayground} </td>
                <td> ${imovel.aceitaPET} </td>
                <td> ${imovel.numeroDeVagas} </td>
                <td> ${imovel.numeroDeQuartos} </td>
                <td> ${imovel.numeroDeBanheiros} </td>
                <td> ${imovel.cidade} </td>
                <td> ${imovel.estado} </td>
                <td> ${imovel.bairro} </td> 
                <td> ${imovel.descricao} </td>
                </tr>`
}

//necessario ajustar tamanho do container para ficar igual a pagina index


// //colocando html na pagina 

function colocaHtmlNaPagina(imovel) {
    const htmlImovel = montaHtmlDoImovelParaComprar(imovel)
    document.getElementById("lista-de-imoveis").innerHTML += htmlImovel
}

function colocaTabelaNoHtml(imovel) {
    const htmlTabela = montaTabelaDoImovelNoHtml(imovel)
    document.getElementById("tabela-head").innerHTML += htmlTabela
}

// // colocando no html todos imoveis

function colocaNoHtmlTodosImoveis(listaDeImoveis) {
    for (const imovel of listaDeImoveis) {
        colocaHtmlNaPagina(imovel)

    }
}
colocaNoHtmlTodosImoveis(listaDeImoveis)




// selecionar opção comprar e aparecer na tabela a lista de opções para comprar
// selecionar a cidade de são paulo e aparecer bairros só de sao paulo (e o mesmo para outras cidades)

function listaDeImoveisParaComprarComFiltroPorCidade(value) {
    apagaTabela()
    const listaDeImoveisFiltradoPorCidade = listaDeImoveis.filter(imovel => imovel.cidade == value)
    colocaNoHtmlTodosImoveis(listaDeImoveisFiltradoPorCidade)
}
function listaDeImoveisParaComprarComFiltroPorBairro(value) {
    apagaTabela()
    const listaDeImoveisFiltradoPorBairro = listaDeImoveis.filter(imovel => imovel.bairro == value)
    colocaNoHtmlTodosImoveis(listaDeImoveisFiltradoPorBairro)

}
function listaDeImoveisParaComprarComFiltroPorNegocio(value) {
    apagaTabela()
    const listaDeImoveisFiltradoPorTipoDeNegocio = listaDeImoveis.filter(imovel => imovel.modelo == value)
    colocaNoHtmlTodosImoveis(listaDeImoveisFiltradoPorTipoDeNegocio)
}

function formataValorEmReal(valorParaFormatar){
    return valorParaFormatar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function apagaTabela(){
    document.getElementById("lista-de-imoveis").innerHTML = ""
}

function listaImoveisComPiscina(){
    apagaTabela()
    const  checkboxChecked = document.getElementById("tem-piscina-checkbox").checked
    const listaDeImoveisFiltradoPorPiscina = listaDeImoveis.filter(imovel => imovel.temPiscina == checkboxChecked)
    colocaNoHtmlTodosImoveis(listaDeImoveisFiltradoPorPiscina)    
}


// coisas para fazer:

// função para alterar o true e false na tabela para sim e não
// metragem minimo e maximo
// garagem/quartos/banheiros "2+..3+ etc.." input de int ou select


// alterar a aparencia da tabela