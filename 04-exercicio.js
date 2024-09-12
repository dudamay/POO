class Carro {
  // Construtor para inicializar os atributos
  constructor(marca, modelo, ano, cor, quilometragem) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.quilometragem = quilometragem;
  }

  // Método para exibir as informações do carro
  exibirInformacoes() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Quilometragem: ${this.quilometragem} km`);
  }

  // Método para atualizar a quilometragem
  atualizarQuilometragem(novaQuilometragem) {
    if (novaQuilometragem > this.quilometragem) {
      this.quilometragem = novaQuilometragem;
      console.log(`Quilometragem atualizada para ${this.quilometragem} km`);
    } else {
      console.log('A nova quilometragem deve ser maior que a atual.');
    }
  }

  // Método para calcular a idade do carro
  calcularIdade() {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - this.ano;
    return idade;
  }
}

// Exemplo de uso da classe Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2018, 'preto', 50000);

meuCarro.exibirInformacoes();
meuCarro.atualizarQuilometragem(52000);
console.log(`Idade do carro: ${meuCarro.calcularIdade()} anos`); 