//// semana 1
/// pdv logistico

// pt 1

let nomeDoProduto: string = "Arroz";
let preco: number = 25.90;
let ativo: boolean = false;
let quantidadeDeEstoque: number[] = [10,20,30];

console.log("====Variaveis====");
console.log(nomeDoProduto,preco,ativo,quantidadeDeEstoque)

// pt 2 
// funções com tipo
function calcularTotal(preco: number, quantidade: number): number {
  return parseFloat((preco * quantidade).toFixed(2));
}

function exibirMensagem (msg: string): void{
    console.log("mensagem", msg)
}

function aplicarDescontos(preco: number, desconto: number = 0.1): number {
    return preco - preco * desconto
}


console.log("\n=== FUNÇÕES ===");
console.log("Total:", calcularTotal(25.90, 3));
console.log("Com desconto:", aplicarDescontos(100));
console.log("Com desconto 20%:", aplicarDescontos(100, 0.2));
exibirMensagem("PDV iniciado com sucesso!");

// pt4 interface

interface produto {
    id: number;
    nome: string;
    preço: number;
    estoque: number;
    ativo: boolean;
}

const produto1:  produto = {
        id: 1,
        nome: "Arroz 5 Kg",
        preço: 25.90,
        estoque: 100,
        ativo: true
}
const produto2: produto = {
  id: 2,
  nome: "Feijão 1kg",
  preço: 8.50,
  estoque: 50,
  ativo: true,
};

function exibirproduto (p: produto): void{
    console.log(`id do produto:[${p.id}], 
    Preço:${p.preço},
    Quantidade em estoque: ${p.estoque}
    Estado: ${p.ativo} `)
}

exibirproduto(produto1)

//classes 
// fabrica de objetos com dados + comportamentos

class caixa {
    private saldo: number;
    public nome: string;

    constructor(nome: string, saldoInicial:number) {
        this.nome = nome
        this.saldo = saldoInicial
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log(`Depositado o valor R$${valor} | Agora seu saldo atual e de ${this.saldo}`)
    }

    sacar(valor: number) {
        this.saldo -= valor
        console.log(`O valor sacado foi de R$${valor} | Agora seu saldo e de R$${this.saldo}`)
    }

    getSaldo (): number {
        return this.saldo
    }
}


const Caixa = new caixa("caixa principal", 500)
Caixa.depositar(500);
Caixa.sacar(200)
console.log(`o saldo final  e de`, Caixa.getSaldo())


// funções async e await
// async = função assincrona
// await = espera a resposta antes de continuar

interface DadosCep{
    cep:string
    logradouro: string
    bairro: string
    localidade: string
    uf: string
}

async function buscarCEP(Cep:string): Promise<void> {
    
    try{
    const resposta = await fetch(``)

    const dados: DadosCep = await resposta.json ()

    console.log(dados.cep)
    console.log(dados.logradouro)
    
    } catch(erro){
        console.log('erro',erro)
    }
}

