class Carro {
    constructor(marca, modelo, ano, cor, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.valor = valor;
    }
    descriptions() {
        return `Modelo -> ${this.modelo}
        Ano -> ${this.ano}
        Cor -> ${this.cor}
        Valor -> ${this.valor}`
    }
    elequix() {
        return `${this.marca} Comprado`
    }
}

let car = new Carro("BMW", "X1", 2001, "Branco", 64990);
console.log(car);

let resposta = prompt("Deseja compralo?")

if (resposta == "s") {
    console.log(elequix)
} else {
    console.log("ok")
}