class  Pessoa {
    constructor(nome, idade, altura, peso, genero, nacionalidade, profissao, estadoCivil, telefone, endereco) {
        this.nome = nome;               
        this.idade = idade;            
        this.altura = altura;            
        this.peso = peso;               
        this.genero = genero;          
        this.nacionalidade = nacionalidade; 
        this.profissao = profissao;      
        this.estadoCivil = estadoCivil;  
        this.telefone = telefone;        
        this.endereco = endereco;  
    }     
    
    // Método para apresentar a pessoa
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, altura ${this.altura} m e peso ${this.peso} kg.`);
    }

    // Método para calcular o IMC
    calcularIMC() {
        const imc = this.peso / (this.altura ** 2);
        return imc.toFixed(2);
    }

    // Método para atualizar a idade
    atualizarIdade(anos) {
        this.idade += anos;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }

    // Método para atualizar o peso, com sobrecarga
    atualizarPeso(novoPeso) {
        if (typeof novoPeso === 'number') {
            this.peso = novoPeso;
            console.log(`${this.nome} agora pesa ${this.peso} kg.`);
        } else if (typeof novoPeso === 'string') {
            const ajuste = parseFloat(novoPeso);
            if (!isNaN(ajuste)) {
                this.peso += ajuste;
                console.log(`${this.nome} teve seu peso ajustado para ${this.peso} kg.`);
            } else {
                console.log('Ajuste de peso inválido.');
            }
        } else {
            console.log('Entrada inválida.');
        }
    }
}

// Exemplo de uso da classe
const pessoa1 = new Pessoa('Maria', 28, 1.70, 60, 'Feminino', 'Brasileira', 'Professora', 'Solteira', '987654321', 'Rua Exemplo, 456');

pessoa1.apresentar(); // Apresenta a pessoa
console.log(`IMC: ${pessoa1.calcularIMC()}`); // Calcula o IMC
pessoa1.atualizarIdade(2); // Atualiza a idade
pessoa1.atualizarPeso(65); // Atualiza o peso
pessoa1.atualizarPeso('-2'); // Ajusta o peso

class Professor extends Pessoa {
  constructor(
    nome,
    idade,
    altura,
    peso,
    genero,
    nacionalidade,
    estadoCivil,
    telefone,
    endereco,
    disciplina,
    salario
  ) {
    super(
      nome,
      idade,
      altura,
      peso,
      genero,
      nacionalidade,
      "Professor",
      estadoCivil,
      telefone,
      endereco
    );
    this.disciplina = disciplina; // Disciplina que o professor ensina
    this.salario = salario; // Salário do professor
  }

  apresentar() {
    super.apresentar();
    console.log(
      `Dou aulas de ${this.disciplina} e meu salário é R$ ${this.salario}.`
    );
  }
}

class Funcionario extends Pessoa {
  constructor(
    nome,
    idade,
    altura,
    peso,
    genero,
    nacionalidade,
    estadoCivil,
    telefone,
    endereco,
    departamento,
    salario
  ) {
    super(
      nome,
      idade,
      altura,
      peso,
      genero,
      nacionalidade,
      "Funcionário",
      estadoCivil,
      telefone,
      endereco
    );
    this.departamento = departamento; // Departamento do funcionário
    this.salario = salario; // Salário do funcionário
  }

  apresentar() {
    super.apresentar();
    console.log(
      `Trabalho no departamento de ${this.departamento} com um salário de R$ ${this.salario}.`
    );
  }
}

class Professor extends Pessoa {
  constructor(
    nome,
    idade,
    altura,
    peso,
    genero,
    nacionalidade,
    estadoCivil,
    telefone,
    endereco,
    disciplina,
    salario
  ) {
    super(
      nome,
      idade,
      altura,
      peso,
      genero,
      nacionalidade,
      "Professor",
      estadoCivil,
      telefone,
      endereco
    );
    this.disciplina = disciplina; // Disciplina que o professor ensina
    this.salario = salario; // Salário do professor
  }

  apresentar() {
    super.apresentar();
    console.log(
      `Dou aulas de ${this.disciplina} e meu salário é R$ ${this.salario}.`
    );
  }
}

const estudante1 = new Estudante(
  "Maria",
  20,
  1.7,
  60,
  "Feminino",
  "Brasileira",
  "Solteira",
  "987654321",
  "Rua Exemplo, 456",
  "12345",
  "Engenharia"
);
estudante1.apresentar();

const funcionario1 = new Funcionario(
  "Carlos",
  35,
  1.8,
  75,
  "Masculino",
  "Brasileiro",
  "Casado",
  "123456789",
  "Avenida Exemplo, 789",
  "TI",
  5000
);
funcionario1.apresentar();

const professor1 = new Professor(
  "Eduarda",
  40,
  1.65,
  65,
  "Feminino",
  "Brasileira",
  "Divorciada",
  "987654321",
  "Rua Exemplo, 101",
  "Matemática",
  7000
);
professor1.apresentar();