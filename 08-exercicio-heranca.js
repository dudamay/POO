// Classe base Pessoa
class Pessoa {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  // Métodos
  mostrarDados(){
    console.log(`Olá, meu nome é ${this.nome},tenho ${this.idade}anos,tenho${this.altura} de altura e peso${this.peso}`);
  }
}

// Classe Estudante que herda de Pessoa
class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
  // Métodos
  mostrarCurso(){
    console.log(
      `Olá, meu nome é ${this.nome},tenho ${this.idade}anos,tenho${this.altura} de altura, peso${this.peso} e curso${this.curso}`
    );
  }
}

// Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  // Métodos
  mostrarSalario(){
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade}anos, tenho${this.altura} de altura, peso${this.peso} e salário${this.salario}`
    );
  }
}

// Classe Diretor que herda de Funcionario
class Diretor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

// Classe Professor que herda de Funcionario
class Professor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

// Criando objetos aluno,diretor e professor

const aluno = new Estudante(
  "João",
  16,
  1.78,
  70, 
  "Programação de Jogos Digitais"
);
aluno.mostrarDados();
aluno.mostrarCurso();

const diretor = new Diretor("Sérgio", 45, 1.65, 65, 3000);
diretor.mostrarDados();
diretor.mostrarSalario();
const professor = new Professor("Wanderson", 48, 1.65, 70, 1000);
professor.mostrarDados();
professor.mostrarSalario();

// Mostrando no console a Saída

console.log(aluno); //Saída: Estudante{nome: "João", idade:16, altura:1.7,peso:70,curso:"Programação de Jogos Digitais"}
console.log(diretor); //Saída: Diretor{nome: "Sérgio", idade:45, altura:1.65,peso:65,salario:3000}
console.log(professor); //Saída: Professor{nome: "Wanderson", idade:48, altura:1.65,peso:70,salario:1000}
