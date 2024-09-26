// Classe base Animal
class Animal {
  constructor(nome, idade, peso, tipo, cor) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.tipo = tipo;
    this.cor = cor;
  }

  // Método para mostrar dados do animal
  mostrarDados() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e peso ${this.peso} kg.`
    );
  }

  pular() {
    console.log(`${this.nome} pula de uma forma rápida !`);
  }
}

// Classe Mamifero que herda de Animal
class Mamifero extends Animal {
  constructor(nome, idade, peso, tipo, cor, pelos, altura) {
    super(nome, idade, peso, tipo, cor);
    this.pelos = pelos;
    this.altura = altura;
  }
  // Sobrescrita do método para mostrar dados do animal
  mostrarDados() {
    console.log(
      `Dados do mamífero: 
      nome:${this.nome}, 
      idade:${this.idade} anos, 
      peso ${this.peso} kg,
      tipo ${this.tipo},
      cor: ${this.cor },
      pelos:${this.pelos},
      altura: ${this.altura},`
    );
  }
  pular() {
    console.log(`${this.nome} pula de uma forma veloz e habilidosa !`);
  }
}



// Classe Ovelha que herda de Animal
class Carnivoro extends Animal {
  constructor(nome, idade, peso, tipo, cor, patas, alimento) {
    super(nome, idade, peso, tipo, cor);
    this.patas = patas;
    this.alimento = alimento;
  }

  // Método para mostrar dados do animal
  mostrarDados() {
    console.log(
      `nome:${this.nome}, 
      idade:${this.idade} anos, 
      peso ${this.peso} kg,
      tipo ${this.tipo},
      cor: ${this.cor },
      patas:${this.patas},
      alimento: ${this.alimento},`
    );
  }

  pular() {
    console.log(`${this.nome} não pula!`);
  }
}


// Criando objetos cachorro, ovelha e pato
const cachorro = new Mamifero("Rex",5,30,"cachorro","preto",true,1.20);
cachorro.mostrarDados();
cachorro.pular();

const jacare = new Carnivoro("hulck",13,60,"jacare","verde", 4, "carne");
jacare.mostrarDados();
jacare.pular();

